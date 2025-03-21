import { RendererOptions } from "../runtime-core";

export const nodeOps: Omit<RendererOptions, "patchProp"> = {
	setElementText(node, text) {
		node.textContent = text;
	},

	createElement: (tagName) => {
		return document.createElement(tagName);
	},

	createText(text: string) {
		return document.createTextNode(text);
	},

	insert(child, parent, anchor) {
		parent.insertBefore(child, anchor || null);
	},

	setText(node, text) {
		node.nodeValue = text;
	},

	parentNode: (node) => {
		return node.parentNode;
	},
};
