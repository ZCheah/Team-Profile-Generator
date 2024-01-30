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


// Function prompt user to menu options
function promptMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "menu",
          message: "What would you like to do?",
          choices: ["Add an engineer", "Add an intern", "Finish building the team"],
        },
      ])
      .then((answers) => {
        // User choice dependant on their selection 
        switch (answers.menu) {
          case "Add an engineer":
            promptEngineer();
            break;
          case "Add an intern":
            promptIntern();
            break;
          case "Finish building the team":
            // Generate HTML and end process
            generateHTML();
            break;
        }
      });
  }


  // Function to generate HTML as a file using render function
function generateHTML() {
    const html = render(teamMembers);
    // Check if the output directory exists, create it if not
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    
    // Write the HTML to the specified output file
    fs.writeFileSync(outputPath, html);
    console.log(`Team HTML generated at ${outputPath}`);
  }

  
  // Start the process by prompting for manager details
  promptManager();