//require inquirer, fs, and the shapes
const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");
//use inquirer prompt to ask questions
inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Which shape do you want to create?",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "What color should the shape be (color keyword or hexadecimal number)?",
    },
    {
      type: "input",
      name: "text",
      message:
        "Enter the text you would like displayed on the logo? (3 characters max)",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like the text to be?",
    },
  ])
  //after question completion, we pass in the users answers
  .then((answers) => {
    //declaring shape variable and using switch statement to set a value for shape
    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle(answers.shapeColor);
        break;
      case "Triangle":
        shape = new Triangle(answers.shapeColor);
        break;
      case "Square":
        shape = new Square(answers.shapeColor);
        break;
    }
    // set svgText variable passing in the text and color
    const svgText = `<text x="50" y="50" font-size="30" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    //declare variable that will render the selceted shape
    const svgShape = shape.render();
    //construct svg and pass in template literal for the selected shape
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">${svgShape}${svgText}</svg>`;
    //writeFile to logo.svg passing in svg
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) {
        console.log(err);
      }
      //if no error, let the user know a logo has been generated
      console.log("Generated logo.svg");
    });
  });
