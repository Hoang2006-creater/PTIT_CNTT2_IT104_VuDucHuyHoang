"use strict";
function findElement(arr, value) {
    for (let item of arr) {
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
const numbers = [1, 2, 3, 4, 5];
console.log(findElement(numbers, 3));
console.log(findElement(numbers, 10));
