// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    
  },
  {
    type: "input",
    message: "Give a breif description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "Test instructions.",
    name: "testInstructions",
  },
  {
    type: "list",
    message: "Which license are you using?",
    name: "license",
    choices: ["MIT", "Apache-2.0", "OSL-3.0", "MPL-2.0", "GPL"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("README has been generated!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("README.md", generateMarkdown(data)))
    .catch(callFailure);
}
// Failure function
function callFailure() {
    console.log("Something went wrong!");
}
// initialize app
init();
