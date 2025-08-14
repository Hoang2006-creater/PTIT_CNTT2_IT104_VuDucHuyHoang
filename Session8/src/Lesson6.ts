function findElement<T>(arr:T[],value:T):T|undefined{
    for(let item of arr){
        if(item === value){
            return item
        }
    }
    return undefined
}
const numbers =[1,2,3,4,5]
console.log(findElement(numbers,3));
console.log(findElement(numbers,10));


