const Employee = require("./Employee");

class Manager extends Employee {
  constructor(
    firstName = "",
    lastName = "",
    id = Number,
    email = "",
    officeNumber = Number
  ) {
    super(firstName, lastName, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    console.log(`
          ${this.firstName} ${this.lastName}, is our new team MANAGER.
          Here is their id: ${this.id}
          and their email: ${this.email}
          They are deployed to location: ${this.officeNumber}
          `);
    return new Manager();
  }
}

module.exports = Manager;
