const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

function generateSVG(data) {
  const oppeningTag =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  const shapeTag = "teeest";

  const closingTag = "</svg>";
  const finalSVG = oppeningTag + shapeTag + closingTag;
  return finalSVG;
  // const shapeTag = ""
  // if, else if, else to assign the shapeTag
  // const finalSVG = oppeningTag + ShapeTag
  // return final SVG
}

function form() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter three charactors to be the text of your logo",
        name: "text",
      },
      {
        type: "input",
        message:
          "Enter your text color(accepts a keyword or hexedecimal value)",
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
        message:
          "Enter your shape's color(accepts a keyword or hexedecimal value)",
        name: "shapeColor",
      },
    ])
    .then(function (data) {
      if (data.text.length > 3) {
        console.log("Your logo text must be no larger than three characters!");
        form();
      } else {
        const template = generateSVG(data);
        fs.writeFile("logo.svg", template, function (err) {
          err ? console.log("ERROR!") : console.log("Generated logo.svg");
        });
      }
    });
}
form();
