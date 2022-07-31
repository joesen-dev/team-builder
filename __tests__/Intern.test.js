const Intern = require("../lib/Intern");

test("shows an Intern's school", () => {
  const intern = new Intern(
    "Bobby",
    "Brown",
    12,
    "intern@intern.com",
    "Carleton"
  );

  expect(intern.school).toEqual(expect.any(String));
});

test("gets an Intern's school", () => {
  const intern = new Intern(
    "Bobby",
    "Brown",
    12,
    "intern@intern.com",
    "Carleton"
  );

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("getRole() should be overridden to return 'Intern'", () => {
  const intern = new Intern(
    "Bobby",
    "Brown",
    12,
    "intern@intern.com",
    "Carleton"
  );

  expect(intern.getRole()).toMatchObject(new Intern());
});
