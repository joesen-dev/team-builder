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

  getSchool() {
    return this.school;
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
