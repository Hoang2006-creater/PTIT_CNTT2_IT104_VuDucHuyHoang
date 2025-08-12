"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangles {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangles(2, 5);
console.log("Hinh tron");
console.log(`Dien tich: ${circle.calculateArea().toFixed(2)}`);
console.log(`Chu vi: ${circle.calculatePerimeter().toFixed(2)}`);
console.log("Hinh chu nhat");
console.log(`Dien tich: ${rectangle.calculateArea()}`);
console.log(`Chu vi: ${rectangle.calculatePerimeter()}`);
