const Manager = require("../lib/Manager.js");

test("gets a Manager's office number", () => {
  const manager = new Manager("John", "Doe", 45, "josen@email.com", 1232);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole() should be overridden to return 'Manager'", () => {
  const employee = new Manager("John", "Doe", 1232, "josen@email.com", 1232);

  expect(employee.getRole()).toMatchObject(new Manager());
});
