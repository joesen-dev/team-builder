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
    this.githubURL;
  }

  async getGithub(data) {
    try {
      const answer = await inquirer.prompt({
        type: "input",
        name: "github",
        message: "What is your GitHub URL?",
        validate: (nameInput_1) => {
          if (nameInput_1) {
            return true;
          } else {
            console.log("Please enter you github URL!");
          }
        },
      });
      data = answer;
      if (data) {
        this.githubURL = data.github;
        console.log("GitHub URL: ", data.github);
      }
    } catch (error) {
      if (error.isTtyError) {
      } else {
      }
    }
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
