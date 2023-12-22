const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

// function to take the user's input and generate the svg codeblock

function generateSVG(data) {
  const openingTag =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  const shapeTag = data.shape.render();
  const txtTag = `<text font-weight="bold" x="150" y="100" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`;

  const closingTag = "</svg>";
  const finalSVG = openingTag + shapeTag + txtTag + closingTag;
  return finalSVG;
}

// inquirer function wich asks the user to input their logo's parameters

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
        // creates a new instance of the shape from the shapes.js file
      } else {
        let shapeInstance;
        if (data.shape === "Circle") {
          shapeInstance = new Circle();
        } else if (data.shape === "Square") {
          shapeInstance = new Square();
        } else if (data.shape === "Triangle") {
          shapeInstance = new Triangle();
        }

        // changes the setcolor variable from shapes.js to shapeColor from the inquirer prompt

        shapeInstance.setColor(data.shapeColor);

        // call to execute the function wich generates the SVG, and creates a new .svg file containing the generated .svg code

        const template = generateSVG({
          shape: shapeInstance,
          textColor: data.textColor,
          text: data.text,
        });
        fs.writeFile("logo.svg", template, function (err) {
          err ? console.log("ERROR!") : console.log("Generated logo.svg");
        });
      }
    });
}
form();
