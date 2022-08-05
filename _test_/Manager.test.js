const Manager = require('../lib/Manager');

describe("Manager", () => {
    const name = "Frank";
    const id = 21;
    const email = "test@fakeemail.com";
    const officeNumber = 12
    const title = "Manager";
    const manager = new Manager(name, id, email, officeNumber);

    describe("getOfficeNumber", () => {
        it("should return the manager's office number", () => {
            const result = manager.getOfficeNumber();
            expect(result).toEqual(officeNumber);
        });
    });
    describe("getTitle", () => {
        it("should return the title of the manager", () => {
            const result = manager.getTitle();
            expect(result).toEqual(title);
        });
    });
});