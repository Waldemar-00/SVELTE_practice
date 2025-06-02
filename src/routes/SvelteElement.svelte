<script>
	let tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	let value = $state()
	$inspect(value)
</script>

<select bind:value>
	{#each tags as tag, i}
		<option value={tags[i]}>{tag.toLocaleUpperCase()}</option>
	{/each}
</select>
<svelte:element this={value}>Svelte element</svelte:element>
