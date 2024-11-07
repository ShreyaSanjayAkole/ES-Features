
class Shape {
    calculateArea() {
        console.log("Area calculation method not implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();  // Call the parent class constructor
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super(); 
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

const circle = new Circle(5);
console.log(`Area of Circle: ${circle.calculateArea().toFixed(2)}`);

const triangle = new Triangle(10, 5);
console.log(`Area of Triangle: ${triangle.calculateArea()}`);
