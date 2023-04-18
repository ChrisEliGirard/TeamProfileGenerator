const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 1) {
			throw new Error("Expected parameter 'officeNumber' to not be NaN and to be Positive");
		}

    this.officeNumber = officeNumber;
  };

  getOfficeNumber() {return this.officeNumber};
    
  getRole() {return "Manager"};
};

module.exports = Manager;