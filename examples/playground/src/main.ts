import { createApp, reactive } from "chibivue";

const app = createApp({
	setup() {
		const state = reactive({ message: "Hello, Chibivue!", input: "" });

		const changeMessage = () => {
			state.message += "!";
		};

		const handleInput = (e: InputEvent) => {
			state.input = (e.target as HTMLInputElement)?.value ?? "";
		};

		return { state, changeMessage, handleInput };
	},

	template: `
		<div class="container" style="text-align: center">
			<h2 id="hello">{{ state.message }}</h2>
			<img
				width="150px"
				src="https://avatars.githubusercontent.com/u/40142697?v=4"
				alt="My profile image"
			/>
			<p>My name is <b>Haruki Tazoe</b></p>

			<button @click="changeMessage"> click me! </button>

			<br />

			<label>
				Input Data
				<input @input="handleInput" />
			</label>

			<style>
				.container{
					height: 100vh;
					padding: 16px;
					background-color: #becdbe;
					color: #2c3e50;
				}
			</style>
		</div>
	`,
});

app.mount("#app");
