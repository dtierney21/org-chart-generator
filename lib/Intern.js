const Employee = require("./Employee");

// class to define the intern type of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getTitle() {
        return "Intern";
    }
}

module.exports = Intern;
