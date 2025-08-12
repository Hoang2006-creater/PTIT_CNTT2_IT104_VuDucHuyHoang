"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Day la loai cong viec ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000;
    }
}
const fullTime = new FulltimeJob();
const parTime = new PartimeJob(80);
parTime.printType();
console.log(`Luong co ban cua partime la ${parTime.calculateSalary().toLocaleString()}`);
fullTime.printType();
console.log(`Luong co ban cua fullTime la ${fullTime.calculateSalary().toLocaleString()}`);
