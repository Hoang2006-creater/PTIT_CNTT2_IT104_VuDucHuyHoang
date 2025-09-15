"use strict";
function checkCondition(condition, callback) {
    setInterval(() => {
        if (condition) {
            callback(`Dieu kien tra ve true`);
        }
        else {
            callback("Dieu kien tra ve sai");
        }
    }, 1000);
}
checkCondition(true, (display) => {
    console.log(display);
});
