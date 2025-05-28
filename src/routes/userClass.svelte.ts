export class User {
	age = $state()
	email = $state()
	name = $state()
	constructor(age: number, email: string, name: string) {
		this.age = age
		this.email = email
		this.name = name
	}
}
