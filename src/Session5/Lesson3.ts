class Employee{
    public name:string
    protected company:string
    private phone:number
    constructor(name:string,company:string,phone:number) {
        this.name=name
        this.company=company
        this.phone=phone
    }
    displayInfo(){
        console.log(`Ten:${this.name},Cong ty: ${this.company},SDT:${this.phone}`);
    }
}
let employee1=new Employee("hoang","h",12345678)
employee1.displayInfo()