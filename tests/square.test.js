const Square = require("./../lib/square");

describe("Square", () => {
  it("renders a Square", () => {
    const square = new Square("red");
    const renderSquare = square.render();
    expect(renderSquare).toBe(
      `<rect width="150" height="150" x="50" y="50" fill="red" />`
    );
  });
});
