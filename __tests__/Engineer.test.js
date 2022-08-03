const Engineer = require("../lib/Engineer");

test("shows an Engineer's github", () => {
  const engineer = new Engineer("John", "Doe", 45, "josen@email.com", "josen");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets an Engineer's github page", () => {
  const engineer = new Engineer("John", "Doe", 45, "josen@email.com", "josen");

  expect(engineer.getGithub()).toEqual(expect.any(String)); //? validate this is a github URL
});

test("getRole() should be overridden to return 'Engineer'", () => {
  const engineer = new Engineer(
    "John",
    "Doe",
    1232,
    "josen@email.com",
    "josen"
  );

  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
