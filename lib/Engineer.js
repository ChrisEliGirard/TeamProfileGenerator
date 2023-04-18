const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    if (typeof github !== 'string' || !github.trim().length) {
      throw new Error("Expected the argument for 'github' to not be empty and Type string");
    }

    this.github = github;
  };

    getGitHub() {return this.github};
    
    getRole() {return "Engineer"};
};

module.exports = Engineer;