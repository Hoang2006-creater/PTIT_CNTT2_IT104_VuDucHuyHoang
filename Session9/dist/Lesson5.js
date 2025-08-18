"use strict";
class DataStore {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
        else {
            console.log("Index khong hop le");
        }
    }
}
const stringStore = new DataStore();
stringStore.add("Hello");
stringStore.add("World");
console.log(stringStore.getAll());
stringStore.remove(0);
console.log(stringStore.getAll());
const numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
numberStore.add(30);
console.log(numberStore.getAll());
numberStore.remove(1);
console.log(numberStore.getAll());
