export class User {
	#age = $state()
	#email = $state()
	#name = $state()

	get age() {
		return this.#age
	}
	set age(v) {
		this.#age = v
		if (String(v).length > 1) {
			if (Number(v) > 17 && Number(v) < 100) {
				return
			} else {
				this.#age = 'Age start from 18 to 99'
				setTimeout(() => (this.#age = ''), 2500)
			}
		}
	}
	get email() {
		return this.#email
	}
	set email(e) {
		this.#email = e
	}
	get name() {
		return this.#name
	}
	set name(n) {
		if (typeof n === 'string' && n.length > 3) {
			this.#name = n
		} else {
			this.#name = 'The length must be more then 3 chars'
			setTimeout(() => (this.#name = ''), 2500)
		}
	}
}
