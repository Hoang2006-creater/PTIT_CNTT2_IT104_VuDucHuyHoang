"use strict";
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, (element, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
});
