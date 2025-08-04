function sortArrays(arr1,arr2){
    //Sao chep mang 1
    const result=[...arr1];
    result.splice(result.length,0,...arr2);
    result.sort((a,b)=>a-b);
    console.log(result);
} 
sortArrays([1,2,3,5,9],[4,6,7,8]);
