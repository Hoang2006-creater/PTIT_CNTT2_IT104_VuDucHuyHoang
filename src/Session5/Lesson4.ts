class Vehicles{
    public name:string
    protected year:number
    private company:string
    public readonly id:number
    constructor(id:number,name:string,year:number,company:string){
        this.id=id
        this.name=name
        this.year=year
        this.company=company
}
    
    displayInfo():void{
        console.log(`Ten: ${this.name},Nam san xuat${this.year},Cong ty:${this.company}`); 
    }
}
let Vehicle3=new Vehicles(1,"Toyota",2000,"Toyota")
Vehicle3.displayInfo()
