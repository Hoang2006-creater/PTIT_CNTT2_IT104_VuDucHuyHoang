function sumArrays(...arrays){
    const result=[];
    arrays.forEach(arr => {
        const sum =arr.reduce((total,num)=>total+num,0);
        result.push(sum);
    });
    return result
}
console.log(sumArrays([1,2],[6,7,8],[3,21,20]))