interface changeSpeed{
    speedUp(amount:number):void
    slowDown(amount:number):void
    stop():void
}
class Vehicle implements changeSpeed {
    private speed:number
    constructor(speed:number){
        this.speed=speed
    }
    speedUp(amount:number):void{
        this.speed+=amount
        console.log(`Tang toc them ${amount} thi toc do hien tai la ${this.speed}`);
        
    }
    slowDown(amount: number): void {
        if(amount>=this.speed){
            this.speed=0
        }else{
         this.speed-=amount
        console.log(`Giam toc them ${amount} thi toc do hien tai la ${this.speed}`);
        }
    }
    stop():void{
        this.speed=0
        console.log("Phuong tien cua ban da bi dung");
    }
} 
const myVehicle=new Vehicle(50)
myVehicle.speedUp(50)
myVehicle.slowDown(20)
myVehicle.speedUp(30)
myVehicle.stop()
