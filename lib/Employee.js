class Employee {
	/**
	 * Object representation of an Employee at a company
	 * @param {string} name - Employee name
	 * @param {number} id - Employee ID
	 * @param {string} email - Employee email
	 */
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName() {return this.name};
	getId() {return this.id};
	getEmail() {return this.email};

	getRole() {return "Employee"};
}

module.exports = Employee;
