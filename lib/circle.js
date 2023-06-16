const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="125" cy="125" r="75" fill="${this.color}" />`;
  }
}

module.exports = Circle;
