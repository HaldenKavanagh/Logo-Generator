
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 0,200 300,200" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="100%" height="100%" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
