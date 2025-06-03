<script>
	// @ts-nocheck

	let mouse = $state({ x: 0, y: 0 })
	// @ts-ignore
	function onmousemove(e) {
		mouse.x = e.x
		mouse.y = e.y
	}
</script>

<svelte:window {onmousemove} />

<h2>Mouse X: {mouse.x}</h2>
<h2>Mouse Y: {mouse.y}</h2>

<button onclick={() => (mouse = null)}>Never touch me!</button>
