var { Employee } = require('./Employee');

class Manager extends Employee {

	/**
	 * Object representation of a Manager at a company
	 * @param {string} name name of the Manager
	 * @param {number} id Employee ID of the Manager
	 * @param {string} email Manager's email
	 * @param {number} officeNumber Manager's office number
	 */
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getRole() {return "Manager"};
	getOfficeNumber() {return this.officeNumber;}
}

module.exports = { Manager };
