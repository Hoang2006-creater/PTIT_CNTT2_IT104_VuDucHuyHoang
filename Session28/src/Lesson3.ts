type Callback3=(number:number)=>void
function processArray(arr:number[],callback:Callback3):void{
    arr.forEach((num,index)=>{
        setTimeout(()=>{
            callback(num)
        },(index+1)*1000)
    })
}
processArray([1,2,3,4],(value:number)=>{
    console.log("Phan tu thu: ",value);
    
})