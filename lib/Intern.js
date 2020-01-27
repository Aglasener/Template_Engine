const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, "Intern", email);
        this.school = school;
    }

    getSchool(){
        var internSchool = this.school;
        return internSchool;
    }
};

module.exports = Intern;