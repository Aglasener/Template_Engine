const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should get the name entered and return it", () => {
      const employee = new Employee("Andres", 9999999, "Manager", "andresglasener@gmail.com");
      let expName = "Andres";

      expect(employee.getName()).toEqual(expName);
    });
});

describe("getId", () => {
    it("should get the id entered and return it", () => {
      const employee = new Employee("Andres", 123456789, "Manager", "andresglasener@gmail.com");
      let expId = 123456789;

      expect(employee.getId()).toEqual(expId);
    });
});

describe("getEmail", () => {
    it("should get the email entered and return it", () => {
      const employee = new Employee("Andres", 123456789, "Manager", "andresglasener@gmail.com");
      let expEmail = "andresglasener@gmail.com";

      expect(employee.getEmail()).toEqual(expEmail);
    });
});

describe("getRole", () => {
    it("should get the email entered and return it", () => {
      const employee = new Employee("Andres", 123456789, "Manager", "andresglasener@gmail.com");
      let expRole = "Employee";

      expect(employee.getRole()).toEqual(expRole);
    });
});
});