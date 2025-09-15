type Callback=(result:number)=>void
function calculate(a:number,b:number,callback:Callback):void{
    const sum:number=a+b
    callback(sum)
}
calculate(3,7,(result:number):void=>{
    console.log("Ket qua",result);  
})