abstract class Shape{
    private name:string;
    constructor(name:string){
        this.name=name
    }
    getName():string{
        return this.name
    }
    abstract getSize():void
}
class Rectangle extends Shape{
    private width:number
    private height:number
    constructor(name:string,width:number,height:number){
        super(name)
        this.width=width
        this.height=height
    }
        getSize(): void {
            console.log(`Chieu dai va rong la ${this.width}, ${this.height}`);
        }
}
const rect=new Rectangle("Hinh chu nhat",2,5)
rect.getSize()