"use strict";
function identity(value) {
    return value;
}
// Test
console.log(identity(5));
console.log(identity("hello"));
console.log(identity({ a: 1 }));
