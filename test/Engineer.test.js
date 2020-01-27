const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should get the github username entered and return it", () => {
      const engineer = new Engineer("Aglasener");
      let expGit = "Aglasener";

      expect(engineer.getGithub()).toEqual(expGit);
    });
});
describe("getRole", () => {
    it("should get the correct role and return it", () => {
      const engineer = new Engineer("Aglasener");
      let expRole = "Engineer";

      expect(engineer.getRole()).toEqual(expRole);
    });
});    

});

