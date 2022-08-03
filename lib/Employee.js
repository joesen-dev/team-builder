class Employee {
  constructor(firstName = "", lastName = "", id = Number, email = "", role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.email = email;
    this.getRole;
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
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
