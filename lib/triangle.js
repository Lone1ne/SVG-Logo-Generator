const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="50,200 125,50 200,200" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
