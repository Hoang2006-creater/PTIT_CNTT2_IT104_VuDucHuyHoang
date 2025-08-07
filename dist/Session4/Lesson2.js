"use strict";
let num = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = num.reduce((total, current) => total + current, 0);
let result = parseFloat((sum / num.length).toFixed(2));
console.log(result);
