"use strict";
function createObject(keys, values) {
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}
// --- Test ---
const keys = ['name', 'age', 'email'];
const values = ['Alice', 25, 'alice@example.com'];
const obj = createObject(keys, values);
console.log(obj);
