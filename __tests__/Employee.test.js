const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("John", "Doe", 45, "josen@email.com");

  expect(employee.firstName).toEqual(expect.any(String));
  expect(employee.lastName).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets an employee's first and last name value", () => {
  const employee = new Employee("John", "Doe", 45, "josen@email.com");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.firstName + " " + employee.lastName)
  );
});

test("gets an employee's id value that is a number", () => {
  const employee = new Employee("John", "Doe", 10);

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("get the employee's email", () => {
  const employee = new Employee("John", "Doe", 1345, "josen@email.com");
  // TODO: validate email
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("returns the employee object", () => {
  const employee = new Employee("John", "Doe", 1232, "josen@email.com");

  expect(employee.getRole()).toMatchObject(new Employee());
});
