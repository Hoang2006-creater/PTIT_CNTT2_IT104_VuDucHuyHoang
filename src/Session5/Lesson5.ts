class Rectangle{
    private width:number
    private height:number
    constructor(width:number,height:number) {
        this.width=width
        this.height=height
    }
    //Getter cho width
    public getWidth():number{
        return this.width
    }
    //Setter cho width
    public setWidth(width:number):void{
        this.width=width
    }
    //Getter cho height
    public getHeight():number{
        return this.height
    }
    public setHeight(height:number):void{
        this.height=height
    }
    public getArea():number{
        return this.width*this.height
    }
    public getPerimeter():number{
        return 2*(this.width+this.height)
    }
}
let rect= new Rectangle(2,5)
console.log("Chieu rong",rect.getWidth());
console.log("Chieu dai",rect.getHeight());
console.log("Chu vi",rect.getPerimeter());
console.log("Dien tich",rect.getArea());
rect.setHeight(3)
rect.setHeight(10)
console.log("Sau khi cap nhat");
console.log("Chieu rong",rect.getWidth());
console.log("Chieu dai",rect.getHeight());
console.log("Chu vi",rect.getPerimeter());
console.log("Dien tich",rect.getArea());



