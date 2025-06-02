<script>
	import { quintOut } from 'svelte/easing'
	import './styles.css'
	import { crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	// @ts-ignore
	let todos = $state([{ todo: 'example', checked: false, id: crypto.randomUUID() }])
	let inputNewTodo = $state()
	let selection = $state('')
	const onselectionchange = () => {
		selection = document?.getSelection()?.toString() || ''
	}
	// @ts-ignore
	// @ts-ignore
	function newTodo(e, value) {
		todos.push({ todo: value, checked: false, id: crypto.randomUUID() })
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
	const [send, receive] = crossfade({
		duration: 1000,
		// @ts-ignore
		fallback(node, params) {
			// const style = getComputedStyle(node)
			// const transform = style.transform === 'none' ? '' : style.transform
			return {
				duration: 1000,
				easing: quintOut,
				css: (t) => `
				transform: scale(${t});
				opacity: ${t}
			`
			}
		}
	})
</script>

<svelte:document {onselectionchange} />
<h1>Select this text to fire events</h1>
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
			<li
				in:receive={{ key: todo.id }}
				out:send={{ key: todo.id }}
				animate:flip={{ duration: 400 }}
			>
				<h4>'fucking'</h4>
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
<h2>Selection: {selection}</h2>

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
