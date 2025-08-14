"use strict";
function parialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
console.log(parialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
