<script>
import { reactive } from "chibivue";

export default {
	setup() {
		const state = reactive({ message: "Hello, chibivue!", input: "" });

		const changeMessage = () => {
			state.message += "!";
		};

		const handleInput = (e) => {
			state.input = e.target?.value ?? "";
		};

		return { state, changeMessage, handleInput };
	},
};
</script>

<template>
    <div class="container" style="text-align: center">
		<h2>{{ state.message }}</h2>
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


        <p>input value: {{ state.input }}</p>		
	</div>
</template>

<style>
.container{
    height: 100vh;
    padding: 16px;
    background-color: #c0ffee;
    color: #2c3e50;
}
</style>