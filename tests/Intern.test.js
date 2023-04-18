const Intern = require("../lib/Intern");

describe("Intern", () => {
	describe("Creation", () => {
		it("Should instantiate an Intern object with a name, id, email, and school name when passed valid arguments", () => {
			const employee = new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 'UCF');

			expect(employee.name).toEqual('Christopher Girard');
			expect(employee.id).toEqual(1);
			expect(employee.email).toEqual('chrisgirard@buisness.com');
			expect(employee.school).toEqual('UCF');
		});

		it("Should throw an error if passed no arguments", () => {
			const employee = () => new Intern();

			expect(employee).toThrow();
		});

		it("Should throw an error if not passed a name argument", () => {
			const employee = () => new Intern( 1, 'chrisgirard@buisness.com', 'UCF');
			const err = new Error("Expected argument 'name' to not be empty and be Type string");

			expect(employee).toThrowError(err);
		});		

		it("Should throw an error if not passed a school name", () => {
			const employee = () => new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 2);
			const err = new Error("Expected argument 'school' to not be empty and be Type string");

			expect(employee).toThrowError(err);
		});

		it("Should throw an error if the passed 'school' argument username is not a string", () => {
			const employee = () => new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 2);
			const err = new Error("Expected argument 'school' to not be empty and be Type string");

			expect(employee).toThrowError(err);
		});
	});

	describe("getEmail", () => {
		it("Should return the email of an employee", () => {
			// Create new Intern to perform the test
			const employee = new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 'UCF');

			// Verify that the getEmail() method returns the Intern's email address
			expect(employee.getEmail()).toEqual('chrisgirard@buisness.com');
		});
	});

	describe("getId", () => {
		it("Should return the unique id of a Intern", () => {
			// Create new Intern to perform the test
			const employee = new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 'UCF');

			// Verify that the getId() method returns the Intern's unique id
			expect(employee.getId()).toEqual(1);
		});
	});

	describe("getSchool", () => {
		it("should return the School of a Intern", () => {
			// Create new Intern to perform the test
			const employee = new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 'UCF');

			// Verify that the getSchool() method returns the Intern's school's name
			expect(employee.getSchool()).toEqual('UCF');
		});
	});

	describe("getRole", () => {
		it("should return the role of an employee", () => {
			// Create new Intern to perform the test
      const employee = new Intern('Christopher Girard', 1, 'chrisgirard@buisness.com', 'UCF');

			// Verify that the getRole() method returns the Role "Intern"
			expect(employee.getRole()).toEqual('Intern');
		});
	});
});