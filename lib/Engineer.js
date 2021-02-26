import Employee from "./Employee";

class Engineer extends Employee {
	/**
	 * Object representation of Engineer
	 * @param {string} name name of Engineer at company
	 * @param {number} id Employee ID of Engineer
	 * @param {string} email Email of engineer
	 * @param {string} github Engineer's GitHub username
	 */
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getRole() {return "Engineer";}
	getGithub() {return this.github;}
}

module.exports = Engineer;
