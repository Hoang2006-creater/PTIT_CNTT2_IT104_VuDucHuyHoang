"use strict";
// ------------------- Lớp Book -------------------
class Book {
    constructor(id, title, author, stock, status // "available", "borrowed", ...
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
    setStock(stock) {
        this.stock = stock;
    }
    setStatus(status) {
        this.status = status;
    }
}
// ------------------- Lớp LendedBook -------------------
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
// ------------------- Lớp Member -------------------
class Member {
    constructor(id, name, contact, status = "active" // "active" hoặc "locked"
    ) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    lendBook(book) {
        this.lendedBooks.push(book);
    }
}
// ------------------- Lớp Library -------------------
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    // Thêm sách
    addBook(book) {
        this.books.push(book);
        console.log(`📚 Đã thêm sách: ${book.getTitle()}`);
    }
    // Hiển thị tất cả sách
    showBooks() {
        if (this.books.length === 0) {
            console.log("Không có sách nào trong thư viện.");
            return;
        }
        console.log("\n📖 Danh sách sách trong thư viện:");
        this.books.forEach((book) => {
            console.log(`ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getStock()}, Tình trạng: ${book.getStatus()}`);
        });
    }
}
// ------------------- Demo -------------------
const library = new Library();
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "available");
const book2 = new Book(2, "Học Java OOP", "Trần Thị B", 3, "available");
const book3 = new Book(3, "Cấu trúc dữ liệu & Giải thuật", "Lê Văn C", 2, "available");
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
// Xem sách trong thư viện
library.showBooks();
