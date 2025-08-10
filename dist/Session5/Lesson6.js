"use strict";
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `ID:${this.id},Tieu de: ${this.title},Tac gia: ${this.author}`;
    }
}
class Libary {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    displayBook() {
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
}
let book1 = new Book(1, "Lập trình C cơ bản", "Nguyễn Văn A");
let book2 = new Book(2, "Java nâng cao", "Trần Thị B");
let book3 = new Book(3, "Học Python qua ví dụ", "Lê Văn C");
let book4 = new Book(4, "Cấu trúc dữ liệu & Giải thuật", "Phạm Thị D");
let book5 = new Book(5, "Hệ điều hành", "Nguyễn Văn E");
// Tạo thư viện
let library = new Libary();
//Them vao thu vien
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
//Hien thi
library.displayBook();
