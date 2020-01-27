const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should get the github username entered and return it", () => {
      const engineer = new Engineer("Aglasener", "Andres Glasener", 123456789, "andresglasener@gmail.com");
      let expGit = "Aglasener";

      expect(engineer.getGithub()).toEqual(expGit);
    });
});
describe("getRole", () => {
    it("should get the correct role and return it", () => {
      const engineer = new Engineer("Aglasener", "Andres Glasener", 123456789, "andresglasener@gmail.com");
      let expRole = "Engineer";

      expect(engineer.getRole()).toEqual(expRole);
    });
});    

});

