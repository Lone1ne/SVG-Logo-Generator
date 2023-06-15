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
  ])
  //after question completion, we pass in the users answers
  .then((answers) => {
    //declaring shape variable and using switch statement to set a value for shape
    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle("red");
        break;
      case "Triangle":
        shape = new Triangle("red");
        break;
      case "Square":
        shape = new Square("red");
        break;
    }
    //declare variable that will render the selceted shape
    const svg = shape.render();
    //writeFile to logo.svg passing in svg
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) {
        console.log(err);
      }
      //if no error, let the user know a logo has been generated
      console.log("Generated logo.svg");
    });
  });
