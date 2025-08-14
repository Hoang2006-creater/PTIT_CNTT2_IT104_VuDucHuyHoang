"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Hoang", age: 20 };
const job = { title: "Developer", salary: 2000 };
const merged = mergeObjects(person, job);
console.log(merged);
