<script>
	import './styles.css'
	// @ts-ignore
	let todos = $state([{ todo: 'example', checked: false }])
	let inputNewTodo = $state()
	// @ts-ignore
	function newTodo(e, value) {
		todos.push({ todo: value, checked: false })
	}
	// @ts-ignore
	function spliceTodos(i) {
		todos.splice(i, 1)
	}
	// @ts-ignore
	function reset(e) {
		e.stopPropagation()
		inputNewTodo.value = ''
	}
</script>

<div class="flex">
	<input
		class="newTodo"
		type="text"
		placeholder="NEW TODO"
		bind:this={inputNewTodo}
		onchange={(e) => newTodo(e, inputNewTodo.value)}
	/>
	<button class="add btn">add</button>
	<button class="reset btn" onpointerdown={reset}>reset</button>
</div>

<div class="flex">
	<ul>
		{#each todos as todo, i (crypto.randomUUID())}
			<li>
				<label style="visible: hidden" title="Is todo done?">
					<input
						class="isDone"
						type="checkbox"
						bind:checked={todo.checked}
						onchange={() => spliceTodos(i)}
					/>
				</label>
				<div class="contenteditable inlineBlock" bind:innerHTML={todo.todo} contenteditable></div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.inlineBlock {
		display: inline-block;
	}
	.newTodo {
		border: 2px solid orange;
		border-radius: 0.2rem;
	}
	.isDone {
		width: 17px;
		height: 17px;
		vertical-align: middle;
	}
	.add {
		background-color: green;
		color: white;
		border: none;
	}
	.reset {
		background-color: red;
		color: white;
		border: none;
	}
	.btn {
		margin: 0.2rem;
		padding: 0.4rem;
	}
</style>
