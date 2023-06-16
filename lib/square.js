const Shape = require("./shape");

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<rect width="150" height="150" x="50" y="50" fill="${this.color}" />`;
  }
}

module.exports = Square;
