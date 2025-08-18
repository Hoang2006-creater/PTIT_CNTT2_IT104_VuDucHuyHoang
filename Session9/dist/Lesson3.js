"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Alice" };
const job = { role: "Developer" };
const merged = mergeObjects(person, job);
console.log(merged);
