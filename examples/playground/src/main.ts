import { createApp, h, reactive } from "chibivue";

const MyComponent = {
	props: { someMessage: { type: String } },

	setup(props: { someMessage: string }) {
		return () => h("div", { id: "my-app" }, [`message: ${props.someMessage}`]);
	},
};

const app = createApp({
	setup() {
		const state = reactive({ message: "Hello, World" });
		const changeMessage = () => {
			state.message += "!";
		};

		return () =>
			h("div", { id: "my-app" }, [
				h(MyComponent, { "some-message": state.message }, []),
				h("button", { onClick: changeMessage }, ["change message"]),
			]);
	},
});

app.mount("#app");
