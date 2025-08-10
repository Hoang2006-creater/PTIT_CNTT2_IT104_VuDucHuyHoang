"use strict";
class Books {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
    getYear() {
        return this.year;
    }
    setYear(newYear) {
        this.year = newYear;
    }
    getInfo() {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }
}
class Libarys {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    displayBook() {
        this.books.forEach(book => console.log(book.getInfo()));
    }
    deleteBookById(id) {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);
        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách với ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        let found = false;
        this.books.forEach(book => {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                book.setYear(newYear);
                found = true;
            }
        });
        if (found) {
            console.log(`Đã cập nhật sách với ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    searchBookByTitle(keyword) {
        let foundBooks = this.books.filter(book => book.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(`Các sách tìm thấy với từ khóa "${keyword}":`);
            foundBooks.forEach(book => console.log(book.getInfo()));
        }
        else {
            console.log("Không tìm thấy sách nào.");
        }
    }
}
let librarys = new Libarys();
librarys.addBook(new Books(1, "Lập trình C cơ bản", "Nguyễn Văn A", 2020));
librarys.addBook(new Books(2, "Java nâng cao", "Trần Thị B", 2021));
librarys.addBook(new Books(3, "Học Python qua ví dụ", "Lê Văn C", 2019));
console.log(" Danh sách ban đầu:");
librarys.displayBook();
librarys.updateBookById(3, "Python nâng cao", "Nguyễn Văn F", 2023);
console.log(" Danh sách sau khi cập nhật:");
librarys.displayBook();
librarys.deleteBookById(2);
console.log(" Danh sách sau khi xóa ID=2:");
librarys.displayBook();
console.log(" Tìm kiếm từ khóa 'python':");
librarys.searchBookByTitle("python");
