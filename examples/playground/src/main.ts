import { createApp, h, reactive } from "chibivue";

const app = createApp({
	// setup() {
	// 	const state = reactive({ message: 'Hello, Chibivue!' });
	// 	const changeMessage = () => {
	// 		state.message += '!';
	// 	}

	// 	return { state, changeMessage };
	// },

	setup() {
		const state = reactive({ message: "hello" });
		return () => h("div", {}, [state.message]);
	},

	// template: `
	// 	<div class="container" style="text-align: center">
	// 		<h2 id="hello">Hello, World!</h2>
	// 		<img
	// 			width="150px"
	// 			src="https://avatars.githubusercontent.com/u/40142697?v=4"
	// 			alt="My profile image"
	// 		/>
	// 		<p>My name is <b>Haruki Tazoe</b></p>

	// 		<button id="btn"> click me! </button>

	// 		<style>
	// 			.container{
	// 				height: 100vh;
	// 				padding: 16px;
	// 				background-color: #becdbe;
	// 				color: #2c3e50;
	// 			}
	// 		</style>
	// 	</div>
	// `,

	template: "<div>{{ state.message }}</div>",
});

app.mount("#app");
