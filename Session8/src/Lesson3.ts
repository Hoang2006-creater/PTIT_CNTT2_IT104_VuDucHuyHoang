function reverseArray<T>(arr:T[]):T[]{
    let reverse:T[]=[]
    for(let i =arr.length-1;i>=0;i--){
        reverse.push(arr[i])
    }
    return reverse
}
const reverseNumber=reverseArray([1,2,3])
const reverseString=reverseArray([`c`,`b`,`a`])
console.log(reverseNumber)
console.log(reverseString);
