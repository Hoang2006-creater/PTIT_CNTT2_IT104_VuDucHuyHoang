"use strict";
class Polygon {
    getInfo() {
        console.log("day la ");
    }
}
class Square extends Polygon {
    constructor(side) {
        super();
        this.side = side;
    }
    getName() {
        return "Hinh vuong";
    }
    getArea() {
        return this.side ** 2;
    }
}
class Tringle extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getName() {
        return "Hinh chu nhat";
    }
    getArea() {
        return 0.5 * this.width * this.height;
    }
}
const shape = [new Square(5), new Tringle(2, 5)];
shape.forEach((shape) => {
    shape.getInfo();
});
