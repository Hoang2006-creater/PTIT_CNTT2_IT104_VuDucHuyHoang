"use strict";
function reverseArray(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}
const reverseNumber = reverseArray([1, 2, 3]);
const reverseString = reverseArray([`c`, `b`, `a`]);
console.log(reverseNumber);
console.log(reverseString);
