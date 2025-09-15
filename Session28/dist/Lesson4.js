"use strict";
function displayNumbers(callback, delay) {
    let count = 1;
    setInterval(() => {
        callback(count);
        count++;
    }, delay);
}
displayNumbers((value) => {
    console.log("So thu tu", value);
}, 1000);
