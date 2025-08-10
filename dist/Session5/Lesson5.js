"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    //Getter cho width
    getWidth() {
        return this.width;
    }
    //Setter cho width
    setWidth(width) {
        this.width = width;
    }
    //Getter cho height
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
let rect = new Rectangle(2, 5);
console.log("Chieu rong", rect.getWidth());
console.log("Chieu dai", rect.getHeight());
console.log("Chu vi", rect.getPerimeter());
console.log("Dien tich", rect.getArea());
rect.setHeight(3);
rect.setHeight(10);
console.log("Sau khi cap nhat");
console.log("Chieu rong", rect.getWidth());
console.log("Chieu dai", rect.getHeight());
console.log("Chu vi", rect.getPerimeter());
console.log("Dien tich", rect.getArea());
