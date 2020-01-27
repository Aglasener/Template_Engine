class Employee {
    constructor(name, id, title, email) {
      this.name = name;
      this.id = id;
      this.title = title;
      this.email = email;
    }
    
    getName(){
        var employeeName = this.name;
        return employeeName;
    }

    getId(){
        var employeeID = this.id;
        return employeeID;
    }

    getEmail(){
        var employeeEmail = this.email;
        return employeeEmail;
    }

    getRole(){
        var role = this.title;
        return role;
    }
  }
  
  module.exports = Employee;