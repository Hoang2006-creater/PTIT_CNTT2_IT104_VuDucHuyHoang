class Employee{
    public name:string
    protected company:string
    private phone:string
    constructor(name:string,company:string,phone:string){
        this.name=name
        this.company=company
        this.phone=phone
    }
    getPhone():string{
        return this.phone
    }
    printInfo():void{
        console.log(`Name: ${this.name}, Company: ${this.company},Phone:${this.phone}`);
    }
}
class classManager extends Employee{
    public teamSize:number
    constructor(name:string,company:string,phone:string,timeSize:number){
        super(name,company,phone)
        this.teamSize=timeSize
    }
    printInfo(): void {
    super.printInfo()
    console.log(`So luong thanh vien : ${this.teamSize}`);
    }
}
const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
emp.printInfo();

console.log("----");

const mgr = new classManager("Trần Thị B", "XYZ Ltd", "0987654321", 5);
mgr.printInfo();