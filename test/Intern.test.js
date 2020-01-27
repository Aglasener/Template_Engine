const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should get the school entered and return it", () => {
      const intern = new Intern("Iowa State University", "Andres Glasener", 123456789, "andresglasener@gmail.com");
      let expSchool = "Iowa State University";

      expect(intern.getSchool()).toEqual(expSchool);
    });
});
describe("getRole", () => {
    it("should get the correct role and return it", () => {
      const intern = new Intern("Iowa State University", "Andres Glasener", 123456789, "andresglasener@gmail.com");
      let expRole = "Intern";

      expect(intern.getRole()).toEqual(expRole);
    });
});
});   