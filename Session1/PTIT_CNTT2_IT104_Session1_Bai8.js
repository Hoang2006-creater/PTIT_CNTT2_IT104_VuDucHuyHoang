function insertArray(arr1,arr2,index){
    if(index<0||index>arr1.length){
        console.log("Vi tri khong hop le");
        return;
    }
    //Sao chep mang 1
    const result=[...arr1];
    //Dung splice de chen mang 2 vao mang 1
    result.splice(index,0,...arr2);
    console.log(result);
    return result
}
insertArray([1,2,3,7,8],[4,5,6],3);