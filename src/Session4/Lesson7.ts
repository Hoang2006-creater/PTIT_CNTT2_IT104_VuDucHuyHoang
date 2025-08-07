function proccesInput(input:string|number|boolean):void{
    if(typeof input ==="string"){
    //Kiem tra neu chuoi chi toan so
    //Dung regex
    if(/^\d+$/.test(input)){
        const num=Number(input)
        console.log(num**2);
        }else{
            //Dem so ky tu chu cai va loa bo so va ky tu dac biet
            const letters =input.match(/[a-zA-z]/g);
            let count=0;
            if(letters){
                count=letters.length
            }
            console.log(`${count} ky tu chu cai`);
        }
    }else if(typeof input ==="number"){
        if(isPrime(input)){
            console.log("La so nguyen to");
        }else{
            console.log("Khong phai la so nguyen to");
        }
    }else if(typeof input==="boolean"){
        if(input){
            console.log("Tien hanh xu ly");
        }else{
            console.log("Dung xu ly");
        }
    }
}
function isPrime(n:number):boolean{
    if(n<2){
        return false
    }
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%2===0){
            return false
        }
    }
    return true
}
proccesInput("1234");