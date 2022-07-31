const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// TODO: create two arrays. One for team members, and one for ID's.

// TODO: Create an array of questions for user input
const managerQuestions = [
  // ********** Manager **********
  {
    type: "input",
    name: "manager",
    message: "Who is your team manager?",
    validate: (answers) => {
      if (answers) {
        return true;
      } else {
        console.log("Please enter you Manager's name");
        return false;
      }
    },
  },
];

/** FUNCTIONS DEFINITIONS
 ************************************************************/
const promptUser = async (data) => {
  await inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers);
    // const manager = new Manager(); // TODO: push new manager into team members array
  });
};

/** FUNCTIONS INITIALIZATION
 ************************************************************/
function init() {
  console.log(`
=================
Build your Team
=================
`);
  promptUser();
  //   .then((readmeData) => {
  //   return writeToFile(readmeData);
  // });
}
init();
