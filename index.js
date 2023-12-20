const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter three charactors to be the text of your logo",
      name: "text",
    },
    {
      type: "input",
      message: "Enter your text color(accepts a keyword or hexedecimal value)",
      name: "textColor",
    },
    {
      type: "list",
      message: "Select your shape",
      choices: ["Circle", "Square", "Triangle"],
      name: "shape",
    },
    {
        type: "input",
        message: "Enter your shape's color(accepts a keyword or hexedecimal value)",
        name: "shapeCcolor",
      },
  ])
  .then(function (data) {
    fs.readFile("logo.svg", data.title, function (err) {
      err ? console.log("ERROR!") : console.log("Generated logo.svg");
    });
  });
