const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    if (typeof school !== "string" || !school.trim().length) {
      throw new Error("Expected argument 'school' to not be empty and be Type string")
    }

    this.school = school;
    };

    getSchool() {return this.school};
    
    getRole() {return "Intern"};
};

module.exports = Intern;