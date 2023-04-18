class Employee {
  constructor(name, id, email) {
    // validate incoming arguments
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected argument 'name' to not be empty and be Type string");
    }

    if (typeof id !== "number" || isNaN(id) || id < 1) {
      throw new Error("Expected argument 'id' to be a non zero positive number");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected argument 'Email' to not be empty and to be Type string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {return this.name};

  getId() {return this.id};

  getEmail() {return this.email};

  getRole() {return 'Employee'};
};

module.exports = Employee;