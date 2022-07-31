const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(
    firstName = "",
    lastName = "",
    id = Number,
    email = "",
    github = ""
  ) {
    super(firstName, lastName, id, email, github);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    console.log(`
          ${this.firstName} ${this.lastName}, is our new team ENGINEER.
          Here is their id: ${this.id}
          and their email: ${this.email}
          here a link to their Github: ${this.github}
          `);
    return new Engineer();
  }
}

module.exports = Engineer;
