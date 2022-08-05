const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const htmlHelper = require("./src/TemplateHelper");

const teamMembers = [];

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
        switch (answers.additionalTeamMember) {
            case "Add Engineer":
                engineerInfo();
                break;
            case "Add Intern":
                internInfo();
                break;
            default:
                createHTML("./dist/index.html", htmlHelper(teamMembers));
        }
    });
};

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
        switch (answers.additionalTeamMember) {
            case "Add Engineer":
                engineerInfo();
                break;
            case "Add Intern":
                internInfo();
                break;
            default:
                createHTML("./dist/index.html", htmlHelper(teamMembers));
        }
    });
};

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
        switch (answers.additionalTeamMember) {
            case "Add Engineer":
                engineerInfo();
                break;
            case "Add Intern":
                internInfo();
                break;
            default:
                createHTML("./dist/index.html", htmlHelper(teamMembers));
        }
    });
};

function createHTML(file, data) {
    fs.writeFile(file, data, (err) => {
        err ? console.error(err) : console.log("Index.html Successfully Generated!");
    });
}

managerInfo();
