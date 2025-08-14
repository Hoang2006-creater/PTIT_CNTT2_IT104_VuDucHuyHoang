function flatten<T>(arr:T[][]):T[]{
    let result:T[]=[]
    for(let item of arr){
        result=result.concat(item)
    }
    return result
}
console.log(flatten([[1,2],[3,4],[5,6]]));
