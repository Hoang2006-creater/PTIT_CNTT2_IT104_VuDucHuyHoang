"use strict";
function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
calculate(3, 7, (result) => {
    console.log("Ket qua", result);
});
