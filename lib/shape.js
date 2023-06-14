class Shape {
  constructor(color) {
    this.color = color;
  }
  render() {
    throw new Error("render() must be implemented.");
  }
}

module.exports = Shape;
