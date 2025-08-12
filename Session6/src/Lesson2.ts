abstract class Job{
    private type:string
    constructor(type:string) {
        this.type=type
    }
    printType():void{
        console.log(`Day la loai cong viec ${this.type}`);
    }
    abstract calculateSalary():number
}
class PartimeJob extends Job{
    private workingHour:number
    constructor(workingHour:number){
        super("Part-time");
        this.workingHour=workingHour
    }
    calculateSalary(): number {
        return this.workingHour*30000
    }
}
class FulltimeJob extends Job{
    constructor(){
        super("Full-time")
    }
    calculateSalary(): number {
        return 10000000
    }
}
const fullTime= new FulltimeJob()
const parTime=new PartimeJob(80)
parTime.printType()
console.log(`Luong co ban cua partime la ${parTime.calculateSalary().toLocaleString()}`);
fullTime.printType()
console.log(`Luong co ban cua fullTime la ${fullTime.calculateSalary().toLocaleString()}`);

