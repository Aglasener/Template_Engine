const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, "Manager", email);
        this.officeNumber = officeNumber;
    }
  };

module.exports = Manager;