<script lang="ts">
	let colors: string[] = $state([])
</script>

<h1>Group contains next {colors.length === 1 ? 'color' : 'colors'}: {colors}</h1>
{#each ['red', 'green', 'blue', 'brown'] as color, index (color + index)}
	<label>
		<input type="checkbox" value={color} bind:group={colors} />
		{color}
	</label>
{/each}

<style>
	label {
		display: block;
	}
	input {
		padding: 0.5rem 1rem 0.5rem 0.5rem;
	}
</style>
