"use strict";
function withDefault(value) {
    if (value === undefined) {
        return "default";
    }
    return value;
}
// Test
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
