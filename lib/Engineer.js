const Employee = require("./Employee");

// class to define the engineer type of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getTitle() {
        return "Engineer";
    }
}

module.exports = Engineer;
