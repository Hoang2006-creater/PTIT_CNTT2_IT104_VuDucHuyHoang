abstract class Person{
    public name:string 
    constructor(name:string) {
        this.name=name
    }
    displayInfo():void{
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person{
    public id:string
    constructor(name:string,id:string) {
        super(name)
        this.id=id        
    }
    displayInfo(): void {
        console.log(`Ma sinh vien: ${this.id},Ten ${this.name}`);
    }
}
class Teacher extends Person{
    public subject:string
    constructor(name:string,subject:string) {
        super(name)
        this.subject=subject        
    }
    displayInfo(): void {
        console.log(`Ma giao viem: ${this.subject} Ten: ${this.name}`);
    }
}
const student= new Student("1","Hoang")
const teacher = new Teacher("Trần Thị B", "Toán học");
student.displayInfo();
teacher.displayInfo();