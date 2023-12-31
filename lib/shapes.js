// shape class, passed on to the other three shapes

class Shape {
  constructor() {
    this.color = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// The three shapes, returns the SVG code for the respective shape

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 25,150 275,150" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="100%" height="100%" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
