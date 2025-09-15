"use strict";
function delayedCallback(callback, delay) {
    setTimeout(() => {
        callback();
    }, delay);
}
delayedCallback(() => {
    console.log("hi");
}, 2000);
