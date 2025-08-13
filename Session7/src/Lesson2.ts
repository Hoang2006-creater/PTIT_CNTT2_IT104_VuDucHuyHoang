class Vehicle{
    protected name:string
    protected speed:number
    protected id:string
    constructor(name:string,speed:number,id:string){
        this.name=name
        this.speed=speed
        this.id=id
    }
    speedUp(amount:number):void{
        this.speed+=amount
        
    }
    slowDown(amount:number):void{
        this.speed=Math.max(0,this.speed-amount)
        console.log();
        console.log(`${this.name} giam toc ${amount} km/h`);
    }
    showSpeed():void{
        console.log(`Toc do hien tai cua ${this.name}: ${this.speed}`);
    }
}
class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string,speed:number,id:string,gear:number) {
        super(name,speed,id)
        this.gear=gear
    }
    showInfo():void{
        console.log(`Tên phương tiện: ${this.name}`);
        console.log(`Mã định danh: ${this.id}`);
        console.log(`Tốc độ: ${this.speed} km/h`);
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const bike=new Bicycle("Xe dap",10,"B1",6)

bike.showSpeed();  
bike.speedUp(5);   
bike.showSpeed();
bike.slowDown(8);  
bike.showSpeed();


bike.showInfo();