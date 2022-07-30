class Employee {
  constructor(firstName = "", lastName = "", id = Number, email = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
  }

  getName() {
    if (this.firstName === "" || this.lastName === "") {
      return false;
    }
    return this.firstName + " " + this.lastName;
  }

  getId() {
    if (isNaN(this.id)) {
      return false;
    }
    return this.id;
  }

  getEmail() {
    if (this.email === "") {
      return false;
    }
    return this.email; // TODO: Should validate email formatting
  }

  getRole() {
    console.log(`
        ${this.firstName} ${this.lastName}, is our new team member.
        Here is his id: ${this.id}
        and his email: ${this.email}
        `);
    return new Employee();
  }
}

module.exports = Employee;
