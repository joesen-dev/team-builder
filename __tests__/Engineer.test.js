const Engineer = require("../lib/Engineer");

test("shows an Engineer's github", () => {
  const engineer = new Engineer("John", "Doe", 45, "josen@email.com", "josen");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets an Engineer's github page", () => {
  const engineer = new Engineer("John", "Doe", 45, "josen@email.com", "josen");

  expect(engineer.getGithub()).toEqual(expect.objectContaining({})); // ? validate this is a github URL
  /**
   * * Handling asynchronous operations with jest testing
   * ?  Consider running Jest with `--detectOpenHandles` to troubleshoot this issue
   * ? testing inquirer prompts returns
   * ? ReferenceError:
   * ? You are trying to `import` a file after the Jest environment has been torn down. From __tests__/Engineer.test.js.
   */
});

test("getRole() should be overridden to return 'Engineer'", () => {
  const engineer = new Engineer(
    "John",
    "Doe",
    1232,
    "josen@email.com",
    "josen"
  );

  expect(engineer.getRole()).toMatchObject(new Engineer());
});
