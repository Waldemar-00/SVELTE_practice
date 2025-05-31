<script>
	import './styles.css'
	import { Tween } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	const tween = new Tween(0, { duration: 700, easing: cubicOut })
	// @ts-ignore
	function improve(p) {
		tween.target = p
	}
</script>

<label style="visible: hidden" title="progress with tween">
	<progress max="1" value={tween.current}></progress>
</label>
<div class="buttons">
	<button onclick={() => improve(0.2)}>20%</button>
	<button onclick={() => improve(0.4)}>40%</button>
	<button onclick={() => improve(0.6)}>60%</button>
	<button onclick={() => improve(0.8)}>80%</button>
	<button onclick={() => improve(1)}>100%</button>
</div>
