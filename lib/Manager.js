const Employee = require("./Employee");

// class to define the manager type of employee
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getOfficeNumber() {
        return this.office;
    }

    getTitle() {
        return "Manager";
    }
}

module.exports = Manager;
