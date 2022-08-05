const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    const name = "Sally";
    const id = 456;
    const email = "test@fakeemail.com";
    const github = "username123";
    const title = "Engineer";
    const engineer = new Engineer(name, id, email, github);

    describe("getGitHub", () => {
        it("should return the GitHub username of the engineer", () => {
            const result = engineer.getGitHub();
            expect(result).toEqual(github);
        });
    });
    describe("getTitle", () => {
        it("should return the title of the engineer", () => {
            const result = engineer.getTitle();
            expect(result).toEqual(title);
        });
    });
});