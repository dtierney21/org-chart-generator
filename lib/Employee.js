const Inquirer = require("Inquirer");
const Manager = require("./Manager");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.getName;
    }    

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }
}

module.exports = Employee;
