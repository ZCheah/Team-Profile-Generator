const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Creating an array for team members
const teamMembers = [];

// Function prompt for the manager details
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team manager's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the team manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the team manager's office number:",
      },
    ])
    .then((answers) => {
      // Creating a manager object
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      // Next step of the prompt
      promptMenu();
    });
}
// Function prompt for the engineer details
function promptEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the engineer's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter the engineer's employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter the engineer's email address:",
        },
        {
          type: "input",
          name: "github",
          message: "Enter the engineer's GitHub username:",
        },
      ])
      .then((answers) => {
        // Creating a manager object
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        teamMembers.push(engineer);
        // Next step of the prompt
        promptMenu();
      });
  }
  // Function prompt for the intern details
function promptIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the intern's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Enter the intern's employee ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Enter the intern's email address:",
        },
        {
          type: "input",
          name: "school",
          message: "Enter the intern's school:",
        },
      ])
      .then((answers) => {
        // Creating an Intern object 
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamMembers.push(intern);
        // Next step of the prompt
        promptMenu();
      });
  }
