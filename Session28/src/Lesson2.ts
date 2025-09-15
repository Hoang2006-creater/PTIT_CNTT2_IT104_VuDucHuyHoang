type Callback2=()=>void
function delayedCallback(callback:Callback2,delay:number):void{
    setTimeout(()=>{
        callback()
    },delay)
}
delayedCallback(()=>{
    console.log("hi");
},2000)