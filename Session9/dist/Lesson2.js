"use strict";
function wrapInArray(value) {
    return [value];
}
// Test
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray({ a: 1 }));
