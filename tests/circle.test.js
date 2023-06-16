const Circle = require("./../lib/circle");

describe("Circle", () => {
  it("renders a circle", () => {
    const circle = new Circle("red");
    const renderCircle = circle.render();
    expect(renderCircle).toBe(`<circle cx="125" cy="125" r="75" fill="red" />`);
  });
});
