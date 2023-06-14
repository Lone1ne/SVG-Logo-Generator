const Square = require("./../lib/square");

describe("Square", () => {
  it("renders a Square", () => {
    const square = new Square("red");
    const renderSquare = square.render();
    expect(renderSquare).toBe(`<rect width="100" height="100" fill="red" />`);
  });
});
