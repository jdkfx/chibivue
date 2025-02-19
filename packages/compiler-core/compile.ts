import { generate } from "./codegen";
import { CompilerOptions } from "./options";
import { baseParse } from "./parse";

export function baseCompile(
	template: string,
	option: Required<CompilerOptions>,
) {
	const parseResult = baseParse(template.trim());
	// console.log("parseResult:", parseResult);
	const code = generate(parseResult, option);
	return code;
}
