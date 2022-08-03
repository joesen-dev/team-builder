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
    this.getRole;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
