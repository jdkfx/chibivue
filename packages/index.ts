export * from "./runtime-dom";
export * from "./runtime-core";
export * from "./reactivity";

import { compile } from "./compiler-dom";
import {
	InternalRenderFunction,
	registerRuntimeCompiler,
} from "./runtime-core/component";
import * as runtimeDom from "./runtime-dom";

function compileToFunction(template: string): InternalRenderFunction {
	const code = compile(template);
	return new Function("Chibivue", code)(runtimeDom);
}

registerRuntimeCompiler(compileToFunction);
