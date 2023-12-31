// tests to make sure each shape returns a valid SVG string with the given color. One test for each shape

const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
  test("test to generate a triangle with a red background", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150,0 25,150 275,150" fill="red" />'
    );
  });
});

describe("Circle test", () => {
  test("Test to generate a circle with a green background", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="green" />'
    );
  });
});

describe("Square test", () => {
  test("Test to generate a square with a blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect width="100%" height="100%" fill="blue" />'
    );
  });
});
