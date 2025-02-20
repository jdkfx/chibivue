const defaultExportRE = /((?:^|\n|;)\s*)export(\s*)default/;
const namedDefaultExportRE = /((?:^|\n|;)\s*)export(.+)(?:as)?(\s*)default/s;

export function rewriteDefault(input: string, as: string): string {
	if (!hasDefaultExport(input)) {
		return input + `\nconst ${as} = {}`;
	}

	return "";
}

export function hasDefaultExport(input: string): boolean {
	return defaultExportRE.test(input) || namedDefaultExportRE.test(input);
}
