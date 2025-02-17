import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
});

function myPlugin(): Plugin {
	return {
		name: "vite:my-plugin",

		transform(code, id) {
			if (id.endsWith(".sample.js")) {
				let result = "";

				for (let i = 0; i < 100; i++) {
					result += `console.log("Hello World from plugin! (${i})");\n`;
				}

				result += code;

				return { code: result };
			}
		},
	};
}
