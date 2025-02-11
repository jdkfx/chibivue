import { createApp } from "chibivue";

const app = createApp({
	setup() {
		Promise.resolve().then(() => {
			const btn = document.getElementById("btn");
			btn &&
				btn.addEventListener("click", () => {
					const h2 = document.getElementById("hello");
					h2 && (h2.textContent += "!");
				});
		});
	},

	// TODO: templateが正しく描画されていないので正しく描画されるように修正する必要がある
	template: `
		<div class="container" style="text-align: center">
			<h2 id="hello">Hello, World!</h2>
			<img
				width="150px"
				src="https://avatars.githubusercontent.com/u/40142697?v=4"
				alt="My profile image"
			/>
			<p>My name is <b>Haruki Tazoe</b></p>

			<button id="btn"> click me! </button>

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
