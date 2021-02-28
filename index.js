const inquirer = require("inquirer");
const fs = require("fs");

const { Manager } = require("./lib/Manager");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");

const render = require("./lib/htmlRenderer");


/** @type {(Manager | Engineer | Intern)[]} */
let teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

/**
 * @type {inquirer.QuestionCollection}
 */
const employeeQuestion = [{
	name: "employeeType", type: "list",
	message: "Which type of team member would you like to add?",
	choices: ["Engineer", "Intern", {name: "I don't want to add any more team members", value: ""}],
}];


/**
 * Questions to ask if the user requests to add a Manager
 * @type {inquirer.QuestionCollection}
 */
const managerQuestions = [
	{
		name: "name", type: "input",
		message: "What is the team manager's name?"
	},
	{
		name: "id", type: "input",
		message: "What is the team manager's id?"
	},
	{
		name: "email", type: "input",
		message: "What is the team manager's email?"
	},
	{
		name: "officeNumber", type: "input",
		message: "What is the team manager's office number?"
	}
];

/**
 * Questions to ask if the user requests to add an Engineer
 * @type {inquirer.QuestionCollection}
 */
const engineerQuestions = [
	{
		name: "name", type: "input",
		message: "What is your engineer's name?"
	},
	{
		name: "id", type: "input",
		message: "What is your engineer's id?"
	},
	{
		name: "email", type: "input",
		message: "What is your engineer's email?"
	},
	{
		name: "github", type: "input",
		message: "What is your engineer's github?"
	}
];

/**
 * Questions to ask if the user requests to add an Intern
 * @type {inquirer.QuestionCollection}
 */
const internQuestions = [
	{
		name: "name", type: "input",
		message: "What is your intern's name?"
	},
	{
		name: "id", type: "input",
		message: "What is your intern's ID?"
	},
	{
		name: "email", type: "input",
		message: "What is your intern's email?"
	},
	{
		name: "school", type: "input",
		message: "What is your intern's school?"
	},
];


/**
 * Call this to run through all the prompts
 */
async function init() {
	console.log("Please build your team");

	let employeeType = "Manager";

	while(employeeType !== "") {
		switch (employeeType) {
			case "Manager":
				await inquirer.prompt(managerQuestions).then(
					(response) => {
						let {name, id, email, officeNumber} = response;
						teamMembers.push(new Manager(name, id, email, officeNumber));
					}
				);
				break;
			case "Engineer":
				await inquirer.prompt(engineerQuestions).then(
					(response) => {
						let {name, id, email, github} = response;
						teamMembers.push(new Engineer(name, id, email, github));
					}
				);
				break;
			case "Intern":
				await inquirer.prompt(internQuestions).then(
					(response) => {
						let {name, id, email, school} = response;
						teamMembers.push(new Intern(name, id, email, school));
					}
				);
				break;
			default: employeeType = "";
		}

		await inquirer.prompt(employeeQuestion).then(
			response => {
				employeeType = response.employeeType;
			}
		)
	}

	console.log(teamMembers);

	const htmlContent = render(teamMembers);

	fs.writeFileSync("./dist/team.html", htmlContent);
}

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
