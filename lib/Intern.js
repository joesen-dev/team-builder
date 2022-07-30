const Employee = require("./Employee");

class Intern extends Employee {
  constructor(
    firstName = "",
    lastName = "",
    id = Number,
    email = "",
    school = ""
  ) {
    super(firstName, lastName, id, email, school);

    this.school = school;
  }

  async getSchool(data) {
    try {
      const answer = await inquirer.prompt({
        type: "input",
        name: "school",
        message: "What School does you Intern belong to?",
        validate: (nameInput_1) => {
          if (nameInput_1) {
            return true;
          } else {
            console.log("Please enter your Intern's School!");
          }
        },
      });
      data = answer;
      if (data) {
        this.school = data.school;
        console.log("Intern's School: ", data.school);
      }
    } catch (error) {
      if (error.isTtyError) {
      } else {
      }
    }
  }

  getRole() {
    console.log(`
          ${this.firstName} ${this.lastName}, is our new Intern.
          Here is their id: ${this.id}
          and their email: ${this.email}
          Their School is: ${this.school}
          `);
    return new Intern();
  }
}

module.exports = Intern;
