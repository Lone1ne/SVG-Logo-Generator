const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
