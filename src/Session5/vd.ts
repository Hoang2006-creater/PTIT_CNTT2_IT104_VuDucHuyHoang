class Persons{
    public name:string;
    private _age:number
    protected email:string
    constructor(name:string,_age:number,email:string){
        this.name=name
        this._age=_age
        this.email=email
    }
    get age(){
        return this._age
    }
    set age(newAge:number){
        if(newAge>=0){
            this._age =newAge
        }else{
            console.log("Loi");
        }
    }
    showInfo(){
        console.log(`${this.name},Age:${this.age},Email:${this.email}`);
        
    }
}
class Students extends Persons{
    showEmail(){
        console.log(`Email:${this.email}`);
    }
}
const person =new Persons("rikkei",3,"rikkei.edu")
console.log("Truy cap thuoc tinh voi public",person.name);
person.name="PTIT"
console.log("sau khi thay doi la",person.name);

