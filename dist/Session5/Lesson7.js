"use strict";
class Books {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    getInfo() {
        return `ID:${this.id},Tieu de: ${this.title},Tac gia: ${this.author}`;
    }
}
class Libarys {
    constructor() {
        this.books = [];
    }
    addBook(books) {
        this.books.push(books);
    }
    displayBook() {
        this.books.forEach(books => {
            console.log(books.getInfo());
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        let found = false;
        this.books.forEach(book => {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                found = true;
            }
        });
    }
}
let book = new Books(1, "Lập trình C cơ bản", "Nguyễn Văn A");
let book6 = new Books(2, "Java nâng cao", "Trần Thị B");
let book7 = new Books(3, "Học Python qua ví dụ", "Lê Văn C");
let book8 = new Books(4, "Cấu trúc dữ liệu & Giải thuật", "Phạm Thị D");
let book9 = new Books(5, "Hệ điều hành", "Nguyễn Văn E");
// Tạo thư viện
let librarys = new Libarys();
//Them vao thu vien
librarys.addBook(book);
librarys.addBook(book6);
librarys.addBook(book7);
librarys.addBook(book8);
librarys.addBook(book9);
//Hien thi
console.log("Danh sach ban dau la: ");
librarys.displayBook();
librarys.updateBookById(3, "Python nâng cao", "Nguyễn Văn F");
console.log("Danh sach sau khi sua la:");
librarys.displayBook();
