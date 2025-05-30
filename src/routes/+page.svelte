<script>
	import { User } from './userClass.svelte'
	const user = new User()
	let ageInput = $state()
	let emailInput = $state()
	let nameInput = $state()
</script>

<h1>Reactivity in Classes</h1>

<h2>User age: {user.age}</h2>
<h2>User name: {user.name}</h2>
<h2>User email: {user.email}</h2>

<div class="newUser">
	<label style="visible: hidden" title="write new age">
		<input
			id="age"
			type="text"
			bind:this={ageInput}
			onchange={() => (user.age = ageInput.value)}
			placeholder="age"
		/>
	</label>
	<label style="visible: hidden" title="write new name">
		<input
			id="name"
			type="text"
			onchange={() => (user.name = nameInput.value)}
			bind:this={nameInput}
			placeholder="name"
		/>
	</label>
	<label style="visible: hidden" title="write new email">
		<input
			id="email"
			type="email"
			bind:this={emailInput}
			onchange={() => (user.email = emailInput.value)}
			placeholder="email"
		/>
	</label>
</div>

<style>
	.newUser {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
	.newUser input {
		padding: 0.5rem 1.5rem 0.5rem 0.5rem;
	}
	* {
		margin-left: 1rem;
	}
</style>
