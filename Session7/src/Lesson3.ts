abstract class Animal{
    public name:string
    constructor(name:string) {
        this.name=name
    }
    abstract makeNoise():void
    printName():void{
        console.log(`Ten dong vat:${this.name}`);
    }
}
class Cat extends Animal{   
    makeNoise(): void {
        console.log("Meo meo");
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("Gau gau");
    }
}
const cat= new Cat("Meo")
const dog=new Dog("Cho")
cat.printName()
cat.makeNoise()
