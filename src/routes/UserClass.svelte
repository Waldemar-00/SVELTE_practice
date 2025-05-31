<script>
	import { SvelteDate } from 'svelte/reactivity'
	export class User {
		#age = $state()
		#email = $state()
		#name = $state()
		#invalid = $state(false)

		get invalid() {
			return this.#invalid
		}
		get age() {
			return this.#age
		}
		set age(v) {
			if (String(v).length > 1) {
				if (Number(v) > 17 && Number(v) < 100) {
					this.#age = v
				} else {
					this.#invalid = true
					this.#age = 'Age start from 18 to 99'
					setTimeout(() => {
						this.#age = ''
						this.#invalid = false
					}, 2500)
				}
			}
		}
		get email() {
			return this.#email
		}
		set email(e) {
			this.#email = e
			if (!e.includes('@')) {
				this.#invalid = true
				this.#email = 'Invalid email! Check - @'
				setTimeout(() => {
					this.#email = ''
					this.#invalid = false
				}, 2500)
			}
		}
		get name() {
			return this.#name
		}
		set name(n) {
			if (typeof n === 'string' && n.length > 3) {
				this.#name = n
			} else {
				this.#invalid = true
				this.#name = 'The length must be more then 3 chars'
				setTimeout(() => {
					this.#name = ''
					this.#invalid = false
				}, 2500)
			}
		}
	}
	const user = new User()
	let ageInput = $state()
	let emailInput = $state()
	let nameInput = $state()

	// @ts-ignore
	function pad(n) {
		if (n >= 10) return n
		else return '0' + n
	}
	const date = new SvelteDate()
	$effect(() => {
		const interval = setInterval(() => {
			date.setTime(Date.now())
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	})
</script>

<h3>Time is: {pad(date.getHours())}:{pad(date.getMinutes())}:{pad(date.getSeconds())}</h3>
<h2>Reactivity in Classes</h2>

<h2>User age:<span class:invalid={user.invalid}>{user.age}</span></h2>
<h2>User name:<span class:invalid={user.invalid}>{user.name}</span></h2>
<h2>User email:<span class:invalid={user.invalid}>{user.email}</span></h2>

<div class="newUser">
	<label style="visible: hidden" title="write new age">
		<input
			class:invalid={user.invalid}
			id="age"
			type="text"
			bind:this={ageInput}
			onchange={() => (user.age = ageInput.value)}
			placeholder="age"
		/>
	</label>
	<label style="visible: hidden" title="write new name">
		<input
			class:invalid={user.invalid}
			id="name"
			type="text"
			onchange={() => (user.name = nameInput.value)}
			bind:this={nameInput}
			placeholder="name"
		/>
	</label>
	<label style="visible: hidden" title="write new email">
		<input
			class:invalid={user.invalid}
			id="email"
			type="email"
			bind:this={emailInput}
			onchange={() => (user.email = emailInput.value)}
			placeholder="email"
		/>
	</label>
</div>

<style>
	.newUser {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
	.newUser input {
		padding: 0.5rem 1.5rem 0.5rem 0.5rem;
	}
	* {
		margin-left: 1rem;
	}
	.invalid {
		color: red;
	}
</style>
