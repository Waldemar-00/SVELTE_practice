// place files you want to import through the `$lib` alias in this folder.
export function reactCount() {
	let count = $state(0)
	return {
		get count() {
			return count
		},
		set count(value) {
			count = value
		}
	}
}
