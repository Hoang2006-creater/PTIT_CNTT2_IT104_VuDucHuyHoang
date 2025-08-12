"use strict";
//1.method
// Là phương thức có thân hàm (có code thực thi).
// Khi gọi, nó sẽ thực hiện ngay phần logic đã được viết.
// Có thể được khai báo trong class thường hoặc abstract class.
class Animal {
    makeSound() {
        console.log("Some generic sound...");
    }
}
const dog = new Animal();
dog.makeSound();
//2.abstract  
// Chỉ được khai báo chữ ký hàm (tên + tham số + kiểu trả về), không có thân hàm.
// Bắt buộc lớp con phải override (viết lại nội dung).
// Chỉ được khai báo trong abstract class (lớp trừu tượng).
// Mục đích: ép các lớp con phải triển khai chức năng riêng.
class Animals {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
const dogs = new Dog();
dog.makeSound();
