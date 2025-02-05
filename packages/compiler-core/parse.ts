import { ElementNode, NodeTypes, TemplateChildNode } from "./ast";

export interface ParserContext {
	readonly originalSource: string;
	source: string;
	offset: number;
	line: number;
	column: number;
}

function createParserContext(content: string): ParserContext {
	return {
		originalSource: content,
		source: content,
		column: 1,
		line: 1,
		offset: 0,
	};
}

export const baseParse = (
	content: string,
): { children: TemplateChildNode[] } => {
	const context = createParserContext(content);
	const children = parseChildren(context, []);
	return { children: children };
};

function parseChildren(
	context: ParserContext,
	ancestors: ElementNode[],
): TemplateChildNode[] {
	const nodes: TemplateChildNode[] = [];

	while (!isEnd(context, ancestors)) {
		const s = context.source;
		let node: TemplateChildNode | undefined;

		if (s[0] === "<") {
			if (/[a-z]/i.test(s[1])) {
				node = parseElement(context, ancestors);
			}
		}

		if (!node) {
			node = parseText(context);
		}

		pushNode(nodes, node);
	}

	return nodes;
}

function isEnd(context: ParserContext, ancestors: ElementNode[]): boolean {
	const s = context.source;

	if (startsWith(s, "</")) {
		for (let i = ancestors.length - 1; i >= 0; --i) {
			if (startsWithEndTagOpen(s, ancestors[i].tag)) {
				return true;
			}
		}
	}

	return !s;
}

function startsWith(source: string, searchString: string): boolean {
	return source.startsWith(searchString);
}

function pushNode(nodes: TemplateChildNode[], node: TemplateChildNode): void {
	if (node.type === NodeTypes.TEXT) {
		const prev = last(nodes);
		if (prev && prev.type === NodeTypes.TEXT) {
			prev.content += node.content;
			return;
		}
	}

	nodes.push(node);
}

function last<T>(xs: T[]): T | undefined {
	return xs[xs.length - 1];
}

function startsWithEndTagOpen(source: string, tag: string): boolean {
	return (
		startsWith(source, "</") &&
		source.slice(2, 2 | tag.length).toLowerCase() === tag.toLowerCase() &&
		/[\t\r\n\f />]/.test(source[2 + tag.length] || ">")
	);
}
