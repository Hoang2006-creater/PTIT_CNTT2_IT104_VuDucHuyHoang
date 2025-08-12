abstract class Polygon {
    abstract getName():string
    abstract getArea():number
    getInfo():void{
        console.log("day la ");
        
    }
}
class Square extends Polygon{
    constructor(private side :number) {
        super()
    }
    getName():string{
        return "Hinh vuong"
    }
    getArea(): number {
        return this.side **2
    }
}
class Tringle extends Polygon{
    constructor(private width :number,private height:number) {
        super()
    }
    getName():string{
        return "Hinh chu nhat"
    }
    getArea(): number {
        return 0.5* this.width *this.height
       }
}
const shape:Polygon[]=[new Square(5),new Tringle(2,5)]
shape.forEach((shape)=>{
    shape.getInfo()
})