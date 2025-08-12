"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chieu dai va rong la ${this.width}, ${this.height}`);
    }
}
const rect = new Rectangle("Hinh chu nhat", 2, 5);
rect.getSize();
