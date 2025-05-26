<script lang="ts">
	import { reactCount } from './counter.svelte'
	const count = reactCount()
	let clientX = $state(0)
	let clientY = $state(0)
	let pointerType = $state('')
	function onpointermove(pointerEvent: any) {
		clientX = pointerEvent.clientX
		clientY = pointerEvent.clientY
		pointerType = pointerEvent.pointerType
	}
</script>

<h1>Welcome to SvelteKit</h1>
<h2>Count: {count.count}</h2>
<button onclick={() => count.count++}>Increment count</button>
<hr />

<h2>Pointer type: {pointerType}</h2>
<h2>Y: {clientY}</h2>
<h2>X: {clientX}</h2>

<div class="div" {onpointermove}></div>
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="capture" onkeydown={(e) => alert(`Div: ${e.key}`)}>
	Bubbling <input
		type="text"
		placeholder="write a char"
		onkeydown={(e) => alert(`Input: ${e.key}`)}
	/>
</div>
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="capture" onkeydowncapture={(e) => alert(`Div: ${e.key}`)}>
	Capturing <input
		type="text"
		placeholder="write a char"
		onkeydowncapture={(e) => alert(`Input: ${e.key}`)}
	/>
</div>

<style>
	.div {
		width: 100vw;
		height: 5vh;
		background-color: grey;
		padding: 2rem;
	}
	.capture,
	input {
		padding: 0.5rem;
	}
</style>
