/** Constants
 ************************************************************/
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
// const generatePage = require("./misc/mock-index");
const writeFile = require("./utils/generate-site");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];
const employeeID = [];

/** FUNCTIONS DEFINITIONS
 ************************************************************/
// ********** Manager **********
const promptManager = async () => {
  console.log(`
=================
Add a Manager
=================
`);
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Manager's name?",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Please enter you Manager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Manager's employee ID?",
        validate: (answers) => {
          let value = answers;
          let isNum = /^\d+$/.test(value); // check if the property value of returned ID contains only number characters (\d+), from begin (^) to end ($) of the string.
          if (isNum) {
            return true;
          } else {
            console.log(`
            -----------------
            Invalid ID
            -----------------`);
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Manager's employee Email?",
        validate: (answers) => {
          function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
          if (validateEmail(answers)) {
            return true;
          } else {
            console.log(`
          -----------------
          Invalid Email
          -----------------`);
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your Manager's Office number?",
        validate: (answers) => {
          let value = answers;
          // check if the property value of returned ID contains only number characters (\d+), from begin (^) to end ($) of the string.
          let isNum = /^\d+$/.test(value);
          if (isNum) {
            return true;
          } else {
            console.log(`
      -----------------
      Invalid Office number
      -----------------`);
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        "", // empty placeholder string as user was not prompted for a last name
        answers.id,
        answers.email,
        answers.officeNumber
      );
      const newManager = manager.getRole();
      teamMembers.push(manager);
      employeeID.push({ id: manager.id });
    })
    .then(promptOptions);
};

// ********** Options **********
const promptOptions = (optionsData) => {
  console.log(`
===============================================
Add a Team Member or finish building your Team
===============================================
`);

  if (!optionsData) {
    optionsData = [];
  }
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do next?",
        choices: [
          "Add an Engineer",
          new inquirer.Separator(),
          "Add an Intern",
          new inquirer.Separator(),
          "Finish building your team",
        ],
      },
    ])
    .then((answersData) => {
      optionsData.push(answersData);
      if (answersData.options === "Add an Engineer") {
        return promptEngineer();
      } else if (answersData.options === "Add an Intern") {
        return promptIntern();
      } else {
        console.log(`
===========================================================
An HTML page with your was created in your dist directory
===========================================================
`);
        return;
      }
    });
};

// ********** Engineer **********
const promptEngineer = async () => {
  console.log(`
=================
Add an Engineer
=================
`);
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Engineer's name?",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Please enter your Engineer's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Engineer's employee ID?",
        validate: (answers) => {
          let value = answers;
          // check if the property value of returned ID contains only number characters (\d+), from begin (^) to end ($) of the string.
          let isNum = /^\d+$/.test(value);

          if (isNum) {
            return true;
          } else {
            console.log(`
-----------------
Invalid ID
-----------------`);
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Engineer's employee Email?",
        validate: (answers) => {
          function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
          if (validateEmail(answers)) {
            return true;
          } else {
            console.log(`
-----------------
Invalid Email
-----------------`);
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is your Engineer's Github username?",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Please enter your Engineer's Github username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        "", // empty placeholder string as user was not prompted for a last name
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
    })
    .then(promptOptions);
};

// ********** Intern **********
const promptIntern = async () => {
  console.log(`
=================
Add an Intern
=================
`);
  await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Intern's name?",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Please enter your Intern's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Intern's employee ID?",
        validate: (answers) => {
          let value = answers;
          // check if the property value of returned ID contains only number characters (\d+), from begin (^) to end ($) of the string.
          let isNum = /^\d+$/.test(value);

          if (isNum) {
            return true;
          } else {
            console.log(`
-----------------
Invalid ID
-----------------`);
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Intern's employee Email?",
        validate: (answers) => {
          function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
          if (validateEmail(answers)) {
            return true;
          } else {
            console.log(`
-----------------
Invalid Email
-----------------`);
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your Intern's School?",
        validate: (answers) => {
          if (answers) {
            return true;
          } else {
            console.log("Please enter your Intern's School");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        "", // empty placeholder string as user was not prompted for a last name
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
    })
    .then(promptOptions);
};

/** FUNCTIONS INITIALIZATION
 ************************************************************/

function init() {
  promptManager()
    .then(() => {
      return generatePage(teamMembers, employeeID);
    })
    .then((pageHTML) => {
      return writeFile(pageHTML);
    })
    .catch((err) => {
      console.log(err);
    });
}
init();
