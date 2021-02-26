var { Employee } = require('./Employee');

class Intern extends Employee {
	/**
	 * Object representation of Intern
	 * @param {string} name Name of intern at company
	 * @param {number} id Employee ID of the intern
	 * @param {string} email Intern's email
	 * @param {string} school School the intern is studying at
	 */
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getRole() {return "Intern";}
	getSchool() {return this.school;}
}

module.exports = { Intern };
