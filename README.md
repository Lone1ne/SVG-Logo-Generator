# SVG Logo Generator

## Description

The SVG Logo Generator is a command-line application designed to easily generate basic SVG logos for projects. By providing a few pieces of information like a short text, colors for the text, a chosen shape, and the color of the shape, users can instantly create a customizable logo. The output is a 300x200 pixel SVG file. This application is ideal for web developers who want an efficient way to create clean, personalized logos for their projects.

## Walkthrough

View the walkthrough video here ----> [SVG-Logo-Generator Walkthrough](https://drive.google.com/file/d/1y1k_AYgLG-U4dJ2pQ5kpx1p988R_E6t6/view?usp=sharing)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Ensure Node.js is installed on your computer. If not, download it from the official website.

1. Clone the repository:

   - git clone git@github.com:Lone1ne/SVG-Logo-Generator.git

2. Move into the project directory:

   - cd SVG-Logo-Generator

3. Install dependancies:

   - npm i

4. Run the application:

   - node index.js

## Usage

Follow the steps below to create your own personalized SVG logo:

1. Start the application
2. Enter the text you want in the logo
3. Choose the text color
4. Select the shape from the list of shapes
5. Specify the shape color
6. Open the generated file logo.svg

You can view your created logo by opening it in the browser!

## Tests

The tests use the Jest as a testing framework. Each shape has its own test suite and the tests ensure that each shape's render method returns the correct SVG string while passing in the color red. After you have cloned the repo and installed the dependancies enter this command in the terminal to run the tests:

    - npm run test

## Questions

Have questions? Contact me through GitHub here: [LONE1NE](https://github.com/Lone1ne)
We look forward to hearing from you!
