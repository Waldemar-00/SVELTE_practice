<script lang="ts">
	let colors: string[] = $state([])
	let options = [
		{ id: 1, color: 'red' },
		{ id: 2, color: 'blue' },
		{ id: 3, color: 'green' },
		{ id: 4, color: 'brown' },
		{ id: 5, color: 'black' }
	]
</script>

<h1>Group contains next {colors.length === 1 ? 'color' : 'colors'}: {colors}</h1>
<form>
	{#each ['red', 'green', 'blue', 'brown'] as color, index (color + index)}
		<label>
			<input type="checkbox" value={color} bind:group={colors} />
			{color}
		</label>
	{/each}
	<hr />
	<select name="colorOptions" id="color" multiple>
		{#each options as option, index (option.id + index)}
			<option value={option}>{option.color.toUpperCase()}</option>
		{/each}
	</select>
</form>

<style>
	form {
		padding: 1rem 2rem;
	}
	form select {
		padding: 0.5rem;
	}
	label {
		display: block;
	}
	input {
		padding: 0.5rem 1rem 0.5rem 0.5rem;
	}
</style>
