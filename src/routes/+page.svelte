<script>
	// @ts-nocheck

	import { User } from './userClass.svelte'
	import { SvelteDate } from 'svelte/reactivity'
	import Snippet from './Snippet.svelte'
	const user = new User()
	let ageInput = $state()
	let emailInput = $state()
	let nameInput = $state()

	// @ts-ignore
	function pad(n) {
		if (n >= 10) return n
		else return '0' + n
	}
	const date = new SvelteDate()
	$effect(() => {
		const interval = setInterval(() => {
			date.setTime(Date.now())
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	})
</script>

<h3>Time is: {pad(date.getHours())}:{pad(date.getMinutes())}:{pad(date.getSeconds())}</h3>
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
<Snippet>
	<h2>Snippets</h2>
	{#snippet colorList()}
		<h2>Colors:</h2>
		<ul>
			<li>Red</li>
			<li>Pink</li>
			<li>Blue</li>
			<li>Green</li>
			<li>Brown</li>
			<li>Yellow</li>
			<li>Purple</li>
		</ul>
	{/snippet}
	{#snippet numberList()}
		<h2>Colors:</h2>
		<ol>
			<li>11</li>
			<li>12</li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
		</ol>
	{/snippet}
</Snippet>

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
