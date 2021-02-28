const path = require("path");
const fs = require("fs");

// const { Employee } = require("./Employee");
const { Manager } = require("./Manager");
const { Intern } = require("./Intern");
const { Engineer } = require("./Engineer");

const templatesDir = path.resolve(__dirname, "../src");


/**
 * 
 * @param {any[]} employees List of employees
 */
const render = employees => {
	const html = [];

	html.push(...employees
		.filter(employee => employee.getRole() === "Manager")
		.map(manager => renderManager(manager))
	);
	html.push(...employees
		.filter(employee => employee.getRole() === "Engineer")
		.map(engineer => renderEngineer(engineer))
	);
	html.push(...employees
		.filter(employee => employee.getRole() === "Intern")
		.map(intern => renderIntern(intern))
	);

	return renderMain(html.join(""));

};


/**
 * 
 * @param {Manager} manager 
 */
const renderManager = manager => {
	let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
	template = replacePlaceholders(template, "name", manager.getName());
	template = replacePlaceholders(template, "role", manager.getRole());
	template = replacePlaceholders(template, "email", manager.getEmail());
	template = replacePlaceholders(template, "id", manager.getId().toString());
	template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber().toString());
	return template;
};


/**
 * 
 * @param {Engineer} engineer 
 */
const renderEngineer = engineer => {
	let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
	template = replacePlaceholders(template, "name", engineer.getName());
	template = replacePlaceholders(template, "role", engineer.getRole());
	template = replacePlaceholders(template, "email", engineer.getEmail());
	template = replacePlaceholders(template, "id", engineer.getId().toString());
	template = replacePlaceholders(template, "github", engineer.getGithub());
	return template;
};


/**
 * 
 * @param {Intern} intern 
 */
const renderIntern = intern => {
	let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
	template = replacePlaceholders(template, "name", intern.getName());
	template = replacePlaceholders(template, "role", intern.getRole());
	template = replacePlaceholders(template, "email", intern.getEmail());
	template = replacePlaceholders(template, "id", intern.getId().toString());
	template = replacePlaceholders(template, "school", intern.getSchool());
	return template;
};


/**
 * 
 * @param {string} html 
 */
const renderMain = html => {
	const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
	return replacePlaceholders(template, "team", html);
};


/**
 * 
 * @param {string} template 
 * @param {string} placeholder 
 * @param {string} value 
 */
const replacePlaceholders = (template, placeholder, value) => {
	const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
	return template.replace(pattern, value);
};

module.exports = render;
