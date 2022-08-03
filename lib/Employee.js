const Inquirer = require("Inquirer");
const Manager = require("./Manager");

class Employee {
    constructor() {}

    getManager() {
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
        ]).then((answers) => {
            const manager = Manager(answers);
        });
    }
}

module.exports = Employee;
