const Inquirer = require("Inquirer");
const Employee = require("./lib/Employee");

const employee = new Employee();

function getManagerInfo() {
    Inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee Name:",
        },
        {
            type: "input",
            name: "id",
            message: "Employee Id:",
        },
        {
            type: "input",
            name: "email",
            message: "Employee Email:",
        },
        {
            type: "input",
            name: "office",
            message: "Office Number:",
        },
    ]).then((answers) => {
        const manager = Manager(answers);
    });
}
