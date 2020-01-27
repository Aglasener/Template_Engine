const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, "Engineer", email);
        this.github = github;
    }
    
    getGithub(){
        var engineerGithub = this.github;
        return engineerGithub; 
    }
  };

  module.exports = Engineer;