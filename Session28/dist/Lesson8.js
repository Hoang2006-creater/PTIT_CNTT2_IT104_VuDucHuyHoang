"use strict";
function myFilter(arr, searchValue, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], searchValue, i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
const number = [1, 2, 2, 3, 4, 5, 6];
const result1 = myFilter(number, 2, (element, searchValue) => element === searchValue);
console.log(result1);
const result2 = myFilter(number, 10, (element, searchValue) => element === searchValue);
console.log(result2);
