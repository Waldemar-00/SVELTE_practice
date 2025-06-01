<script>
	let innerText = $state('Write here')
</script>

<div class="contenteditable" bind:innerHTML={innerText} contenteditable></div>
<h1 bind:innerHTML={innerText} contenteditable></h1>

<style>
	.contenteditable {
		width: 40vw;
		margin: 2rem auto;
		padding: 0.7rem;
		border: 2px solid green;
		color: rgb(0, 62, 0);
		border-radius: 0.2rem;
	}
</style>
