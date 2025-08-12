"use strict";
class RK {
    constructor(name) {
        this.name = name;
    }
    sale() {
        console.log("sale");
    }
    marketing() {
        console.log("sale");
    }
    dgMarketing() {
        console.log("sale");
    }
}
const result = new RK("Rikkei");
result.marketing();
