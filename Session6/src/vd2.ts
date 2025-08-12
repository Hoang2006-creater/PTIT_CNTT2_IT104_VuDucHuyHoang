interface Sale{
    name:string
    sale():void
}
interface Marketing{
    name:string
    marketing():void
}
interface DGMarketing extends Marketing{
    dgMarketing():void
}
class RK implements Sale,Marketing,DGMarketing{
    name:string
    constructor(name:string){
        this.name=name
    }
    sale():void{
        console.log("sale");
    }
       marketing():void{
        console.log("sale");
    }
    dgMarketing():void{
        console.log("sale");
    }
}
const result:Marketing=new RK("Rikkei")
result.marketing()