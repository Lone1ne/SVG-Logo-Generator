const Triangle = require("./../lib/triangle");

describe("Triangle", () => {
  it("renders a Triangle", () => {
    const triangle = new Triangle("red");
    const renderTriangle = triangle.render();
    expect(renderTriangle).toBe(
      `<polygon points="50 15, 100 100, 0 100" fill="red" />`
    );
  });
});
