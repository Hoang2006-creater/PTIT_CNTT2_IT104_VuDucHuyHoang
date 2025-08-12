interface Geometry{
     calculateArea():number
     calculatePerimeter():number
}
class Circle implements Geometry{
    private radius:number
    constructor(radius:number) {
        this.radius=radius
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangles implements Geometry{
    private width :number
    private height:number
    constructor(width:number,height:number) {
        this.width=width
        this.height=height
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}
const circle =new Circle(5)
const rectangle =new Rectangles(2,5)

console.log("Hinh tron");
console.log(`Dien tich: ${circle.calculateArea().toFixed(2)}`);
console.log(`Chu vi: ${circle.calculatePerimeter().toFixed(2)}`);

console.log("Hinh chu nhat");
console.log(`Dien tich: ${rectangle.calculateArea()}`);
console.log(`Chu vi: ${rectangle.calculatePerimeter()}`);