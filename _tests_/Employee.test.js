const Employee = require('../lib/Employee');

describe("Employee", () => {
    const name = "John";
    const id = 1234;
    const email = "test@fakeemail.com";
    const emp = new Employee(name, id, email);

    describe("getName", () => {
        it("should return the id of the emlpoyee", () => {
            const result = emp.getName();
            expect(result).toEqual(name);
        });
    });
    describe("getId", () => {
        it("should return the name of the emlpoyee", () => {
            const result = emp.getId();
            expect(result).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("should return the email of the emlpoyee", () => {
            const result = emp.getEmail();
            expect(result).toEqual(email);
        });
    });
});