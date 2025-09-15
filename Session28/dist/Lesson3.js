"use strict";
function processArray(arr, callback) {
    arr.forEach((num, index) => {
        setTimeout(() => {
            callback(num);
        }, (index + 1) * 1000);
    });
}
processArray([1, 2, 3, 4], (value) => {
    console.log("Phan tu thu: ", value);
});
