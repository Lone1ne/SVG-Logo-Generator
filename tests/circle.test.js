const Circle = require("./../lib/circle");

describe("Circle", () => {
  it("renders a circle", () => {
    const circle = new Circle("red");
    const renderCircle = circle.render();
    expect(renderCircle).toBe(`<circle cx="50" cy="50" r="40" fill="red" />`);
  });
});
