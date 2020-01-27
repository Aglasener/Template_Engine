const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should get the correct role and return it", () => {
      const manager = new Manager(32, "Andres Glasener", 123456789, "andresglasener@gmail.com");
      let expRole = "Manager";

      expect(manager.getRole()).toEqual(expRole);
    });
});    

});