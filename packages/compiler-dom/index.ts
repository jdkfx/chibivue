import { baseCompile, baseParse, CompilerOptions } from "../compiler-core";

export function compile(template: string, options?: CompilerOptions) {
	const defaultOption: Required<CompilerOptions> = { isBrowser: true };
	if (options) Object.assign(defaultOption, options);
	return baseCompile(template, defaultOption);
}

export function parse(template: string) {
	return baseParse(template);
}
