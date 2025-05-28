<script lang="ts">
	import { User } from './userClass.svelte'
	const user: User = new User(19, 'example@exec.com', 'JOHN')
</script>

<h1>Reactivity in Classes</h1>

<h2>User age: {user.age}</h2>
<h2>User name: {user.name}</h2>
<h2>User email: {user.email}</h2>

<div class="newUser">
	<label style="visible: hidden" title="write new age">
		<input id="age" type="text" bind:value={user.age} />
	</label>
	<label style="visible: hidden" title="write new email">
		<input id="email" type="email" bind:value={user.email} />
	</label>
	<label style="visible: hidden" title="write new name">
		<input id="name" type="text" bind:value={user.name} />
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
