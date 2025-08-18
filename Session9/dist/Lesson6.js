"use strict";
function firstMatch(array, predicate) {
    for (let element of array) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
}
console.log(firstMatch([1, 2, 4, 6], (n) => n % 2 === 0));
console.log(firstMatch(["cat", "house", "car"], (word) => word.length > 4));
