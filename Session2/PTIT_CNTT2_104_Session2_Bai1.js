function sum(arr){
    let result =0;
    for(let number of arr){
        if(number%2==0){
            result+=number;
        }
    }
    console.log("Tong la",result);
}
sum([1,2,3,4,5,6])