const Employee = require("../lib/Employee");

describe("Employee", () => {
	describe("Creation", () => {
		it("Should instantiate an Employee object with a name, id, and email when provided those args", () => {
			const employee = new Employee('Christopher Girard', 1, 'chrisgirard@buisness.com');

			expect(employee.name).toEqual('Christopher Girard');
			expect(employee.id).toEqual(1);
			expect(employee.email).toEqual('chrisgirard@buisness.com');
		});

    it("Should throw an error if name entered is not a string", () => {
			const employee = () => new Employee(1, 1, 'chrisgirard@buisness.com');
			const err = new Error("Expected argument 'name' to not be empty and be Type string");

			expect(employee).toThrowError(err);
		});

		it("Should throw an error if not provided a positive id", () => {
			const employee = () => new Employee("Christopher Girard", 'chrisgirard@buisness.com');
			const err = new Error("Expected argument 'id' to be a non zero positive number");

			expect(employee).toThrowError(err);
		});

    it("Should throw an error if id entered is NaN", () => {
			const employee = () => new Employee("Christopher Girard", '1', 'chrisgirard@buisness.com');
			const err = new Error("Expected argument 'id' to be a non zero positive number");

			expect(employee).toThrowError(err);
		});

    it("Should throw an error if Email entered is not a string", () => {
			const employee = () => new Employee("Christopher Girard", 1, 1);
			const err = new Error("Expected argument 'Email' to not be empty and to be Type string");

			expect(employee).toThrowError(err);
		});

		it("Should throw an error if not provided an email", () => {
			const employee = () => new Employee("Christopher Girard", 1);
			const err = new Error("Expected argument 'Email' to not be empty and to be Type string");

			expect(employee).toThrowError(err);
		});

    it("Should throw an error if provided no arguments", () => {
			const employee = () => new Employee();
			expect(employee).toThrow();
		});
	});

	describe("getName", () => {
		it("Should return the employee's name", () => {
			// Create a new Employee to perform the test
			const employee = new Employee('Christopher Girard', 1, 'chrisgirard@buisness.com');

			// Verify that the getName() method returns the employee's name
			expect(employee.getName()).toEqual('Christopher Girard');
		});
	});

	describe("getId", () => {
		it("Should return the employees unique Id", () => {
			// Create a new Employee to perform the test
			const employee = new Employee('Christopher Girard', 10, 'chrisgirard@buisness.com');

			// Verify that the getId() method returns the employee's unique id
			expect(employee.getId()).toEqual(10);
		});
	});

	describe("getEmail", () => {
		it("Should return the employess Email address", () => {
			// Create new Employee to perform the test
			const employee = new Employee('Christopher Girard', 1, 'chrisgirard@buisness.com');

			// Verify that the getEmail() method returns the employee's email address
			expect(employee.getEmail()).toEqual('chrisgirard@buisness.com');
		});
	});

	describe("getRole", () => {
		it("Should return the role of an employee", () => {
			// Create new Employee to perform the test
			const employee = new Employee('Christopher Girard', 1, 'chrisgirard@buisness.com');

			// Verify that the getRole() method returns "Employee"
			expect(employee.getRole()).toEqual('Employee');
		});
	});
});