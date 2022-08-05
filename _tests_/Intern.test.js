const Intern = require('../lib/Intern');

describe("Intern", () => {
    const name = "Sue";
    const id = 5674;
    const email = "test@fakeemail.com";
    const school = "Auburn";
    const title = "Intern";
    const intern = new Intern(name, id, email, school);

    describe("getSchool", () => {
        it("should return the school that the intern is attending", () => {
            const result = intern.getSchool;
            expect(result).toEqual(school);
        });
    });
    describe("getTitle", () => {
        it("should return the title of the intern", () => {
            const result = engineer.getTitle();
            expect(result).toEqual(title);
        });
    });
});