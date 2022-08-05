const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const htmlHelper = require("./src/TemplateHelper");

// Instantiate an array to hold the team members
const teamMembers = [];

// use inquirer to prompt the user for the manager's info
const managerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of the team manager:",
        },
        {
            type: "input",
            name: "id",
            message: "Manager's employee Id:",
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email address:",
        },
        {
            type: "input",
            name: "office",
            message: "Manager's office number:",
        },
        {
            type: "list",
            name: "additionalTeamMember",
            message: "Add another team member?",
            choices: ["Add Engineer", "Add Intern", "Done"],
        },
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamMembers.push(manager);
        addTeamMember(answers.additionalTeamMember);
    });
};

// use inquirer to prompt the user for the engineer's info
const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of the Engineer:",
        },
        {
            type: "input",
            name: "id",
            message: "Engineer's employee Id:",
        },
        {
            type: "input",
            name: "email",
            message: "Engineer's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Engineer's GitHub username:",
        },
        {
            type: "list",
            name: "additionalTeamMember",
            message: "Add another team member?",
            choices: ["Add Engineer", "Add Intern", "Done"],
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        addTeamMember(answers.additionalTeamMember);
    });
};

// use inquirer to prompt the user for the interns's info
const internInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of the Intern:",
        },
        {
            type: "input",
            name: "id",
            message: "Intern's employee Id:",
        },
        {
            type: "input",
            name: "email",
            message: "Intern's email address:",
        },
        {
            type: "input",
            name: "school",
            message: "Intern's school:",
        },
        {
            type: "list",
            name: "additionalTeamMember",
            message: "Add another team member?",
            choices: ["Add Engineer", "Add Intern", "Done"],
        },
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        addTeamMember(answers.additionalTeamMember);
    });
};

// determine if the user wants to input an additional team member or render the page
function addTeamMember(answer) {
    switch (answer) {
        case "Add Engineer":
            engineerInfo();
            break;
        case "Add Intern":
            internInfo();
            break;
        default:
            createHTML("./dist/index.html", htmlHelper(teamMembers));
    }
}

// create the page
function createHTML(file, data) {
    fs.writeFile(file, data, (err) => {
        err ? console.error(err) : console.log("Index.html Successfully Generated!");
    });
}

// run the application
managerInfo();
