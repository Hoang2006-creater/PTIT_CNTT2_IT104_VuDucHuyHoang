type Callback4=(num:number)=>void
function displayNumbers(callback:Callback4,delay:number):void{
    let count:number=1
    setInterval(()=>{
        callback(count)
        count++
       
    },delay)
}
displayNumbers((value:number)=>{
    console.log("So thu tu",value);
},1000)