<script>
	// @ts-nocheck

	// import UserClass from './UserClass.svelte'
	// import Tween from './Tween.svelte'
	// import Contenteditable from './Contenteditable.svelte'
	// import Todos from './Todos.svelte'
	// import SvelteElement from './SvelteElement.svelte'
	import SvelteBoundary from './SvelteBoundary.svelte'
</script>

<svelte:boundary onerror={(error) => console.log('Sending the error message')}>
	<SvelteBoundary />
	{#snippet failed(error, reset)}
		<h1>OOOps!!!</h1>
		<h3>{error.message}</h3>
		<button onclick={reset}>RESET</button>
	{/snippet}
</svelte:boundary>
