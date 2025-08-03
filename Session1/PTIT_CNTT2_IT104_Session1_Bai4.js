const isNumber=(number)=> isFinite(number);
const  checkparty=(number)=>{
    if(!isNumber){
        console.log("Khong phai so tu nhien");
        return
    }
    if(number%2==0){
        console.log(`${number} la so chan`);
    }else{
        console.log(`${number} la so le`)
    }
}
let number = 4
checkparty(number);