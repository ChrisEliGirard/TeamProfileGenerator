const Manager = require("../lib/Manager");

describe("Manager", () => {
	describe("Creation", () => {
		it("Should create a Manager object with a name, id, email, and officeNumber if passed valid arguments", () => {
			const employee = new Manager('Christopher Girard', 1, 'chrisgirard@buisness.com', 1);

			expect(employee.name).toEqual("Christopher Girard");
			expect(employee.id).toEqual(1);
			expect(employee.email).toEqual("chrisgirard@buisness.com");
			expect(employee.officeNumber).toEqual(1);
		});

		it("should throw an error if provided no arguments", () => {
			const employee = () => new Manager();

			expect(employee).toThrow();
		});

		it("Should throw an error if not passed an officeNumber argument", () => {
			const employee = () => new Manager('Christopher Girard', 1, 'chrisgirard@buisness.com');
			const err = new Error("Expected parameter 'officeNumber' to not be NaN and to be Positive");

			expect(employee).toThrowError(err);
		});

		it("Should throw an error if passed argument 'officeNumber' is not a number", () => {
			const employee = () => new Manager('Christopher Girard', 1, 'chrisgirard@buisness.com', 'Hello');
			const err = new Error("Expected parameter 'officeNumber' to not be NaN and to be Positive");

			expect(employee).toThrowError(err);
		});
	});

	describe("getOffice", () => {
		it("Should return the email address of a Manager", () => {
			// Create new Manager to perform the test
			const employee = new Manager('Christopher Girard', 1, 'chrisgirard@buisness.com', 1);

			// Verify that the getOfficeNumber() method returns the Manager's Office Number
			expect(employee.getOfficeNumber()).toEqual(1);
		});
	});

	describe("getRole", () => {
		it("Should return the role of an employee", () => {
			// Create new Manager to perform the test
			const employee = new Manager('Christopher Girard', 1, 'chrisgirard@buisness.com', 1);

			// Verify that the getRole() method returns "Manager"
			expect(employee.getRole()).toEqual('Manager');
		});
	});
});