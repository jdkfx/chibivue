import type { Plugin } from "vite";
import * as fs from "fs";
import { createFilter } from "vite";
import { compile } from "../../compiler-dom";
import { parse, rewriteDefault } from "../../compiler-sfc";

export default function vitePluginChibivue(): Plugin {
	const filter = createFilter(/\.vue$/);

	return {
		name: "vite:chibivue",

		resolveId(id) {
			if (id.match(/\.vue\.css$/)) return id
		},

		load(id) {
			if (id.match(/\.vue\.css$/)) {
				const filename = id.replace(/\.css$/, "");
				const content = fs.readFileSync(filename, "utf-8");
				const { descriptor} = parse(content, { filename });

				const styles = descriptor.styles.map(it => it.content).join("\n");
				return { code: styles };
			}
		},

		transform(code, id) {
			if (!filter(id)) return;

			const outputs = [];
			outputs.push("import * as ChibiVue from 'chibivue';\n");
			outputs.push(`import '${id}.css';\n`);

			const { descriptor } = parse(code, { filename: id });

			const SFC_MAIN = "_sfc_main";
			const scriptCode = rewriteDefault(
				descriptor.script?.content ?? "",
				SFC_MAIN,
			);
			outputs.push(scriptCode);

			const templateCode = compile(descriptor.template?.content ?? "", {
				isBrowser: false,
			});
			outputs.push(templateCode);

			outputs.push("\n");
			outputs.push(`export default { ...${SFC_MAIN}, render }`); // ここ

			return { code: outputs.join("\n") };
		},
	};
}
