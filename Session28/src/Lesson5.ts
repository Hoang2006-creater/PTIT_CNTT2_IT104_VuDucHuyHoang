type Callback5=(message:string)=>void
function checkCondition(condition:boolean,callback:Callback5):void{
    setInterval(()=>{
        if(condition){
            callback(`Dieu kien tra ve true`)
        }else{
            callback("Dieu kien tra ve sai")
        }
    },1000)
}
checkCondition(true,(display:string)=>{
    console.log(display);
    
})