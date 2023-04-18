const Engineer = require("../lib/engineer");

describe("Engineer", () => {
	describe("Creation", () => {
		it("Should create a Engineer object with a name, id, email, and github username when provided valid arguments", () => {
			const employee = new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 'chriseligirard');

			expect(employee.name).toEqual("Christopher Girard");
			expect(employee.id).toEqual(1);
			expect(employee.email).toEqual("chrisgirard@buisness.com");
			expect(employee.github).toEqual('chriseligirard');
		});

		it("Should throw an error if passed no arguments", () => {
			const employee = () => new Engineer();

			expect(employee).toThrow();
		});

    it("Should throw an error if name entered is not a string", () => {
			const employee = () => new Engineer(1, 1, 'chrisgirard@buisness.com', 'chriseligirard');
			const err = new Error("Expected argument 'name' to not be empty and be Type string");

			expect(employee).toThrowError(err);
		});

		it("should throw an error if passed 'github' username is not a string", () => {
			const employee = () => new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 2);
			const err = new Error("Expected the argument for 'github' to not be empty and Type string");

			expect(employee).toThrowError(err);
		});

    it("Should throw an error if not passed a Github username in the arguments", () => {
			const employee = () => new Engineer("Christopher Girard", 1, 'chrisgirard@buisness.com');
			const err = new Error("Expected the argument for 'github' to not be empty and Type string");

			expect(employee).toThrowError(err);
		});
	});

	describe("getName", () => {
		it("should return the Name of an Engineer", () => {
			// Create new Engineer to perform the test
			const employee = new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 'chriseligirard');

			// Verify that the getName() method returns the Engineer's name
			expect(employee.getEmail()).toEqual('chrisgirard@buisness.com');
		});
	});

	describe("getId", () => {
		it("should return the unique id of an Engineer", () => {
			// Create new Engineer to perform the test
			const employee = new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 'chriseligirard');

			// Verify that the getId() method returns the Engineer's unique id
			expect(employee.getId()).toEqual(1);
		});
	});

  describe("getEmail", () => {
		it("Should return the email of an Engineer", () => {
			// Create new Engineer to perform the test
      const employee = new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 'chriseligirard');

			// Verify that the getEmail() method returns the Engineer's email address
			expect(employee.getEmail()).toEqual('chrisgirard@buisness.com');
		});
	});

	describe("getGithub", () => {
		it("Should return the Github of an Engineer", () => {
			// Create new Engineer to perform the test
			const employee = new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 'chriseligirard');

			// Verify that the getGithub() method returns the Engineer's github username
			expect(employee.getGitHub()).toEqual('chriseligirard');
		});
	});

	describe("getRole", () => {
		it("Should return the role of an Engineer", () => {
			// Create new Engineer to perform the test
			const employee = new Engineer('Christopher Girard', 1, 'chrisgirard@buisness.com', 'chriseligirard');

			// Verify that the getRole() method returns "Engineer"
			expect(employee.getRole()).toEqual('Engineer');
		});
	});
});