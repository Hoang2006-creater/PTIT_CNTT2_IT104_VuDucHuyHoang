"use strict";
function task1(next) {
    setTimeout(() => {
        const message = "Task 1 được thực thi";
        console.log(message);
        next(message);
    }, 1000);
}
function task2(next) {
    setTimeout(() => {
        const message = "Task 2 được thực thi";
        console.log(message);
        next(message);
    }, 1500);
}
function task3(next) {
    setTimeout(() => {
        const message = "Task 3 được thực thi! Hoàn thành";
        console.log(message);
        next(message);
    }, 2000);
}
task1((res1) => {
    task2((res2) => {
        task3((res3) => {
        });
    });
});
