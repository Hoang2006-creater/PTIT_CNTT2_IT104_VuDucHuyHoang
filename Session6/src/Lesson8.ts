class Book {
    private id:number;
    private title:string;
    private author:string;
    private stock:number;
    private status:string;
    constructor(id:number, title:string, author:string, stock:number, status:string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    getId():number { 
        return this.id; 
    }
    getTitle():string { 
        return this.title; 
    }
    getAuthor():string { 
        return this.author; 
    }
    getStock():number { 
        return this.stock; 
    }
    getStatus():string { 
        return this.status; 
    }
    setStock(stock:number):void { this.stock = stock; }
    setStatus(status:string):void { this.status = status; }
}

class LendedBooks {
    private memberId:number;
    private bookId:number;
    private dueDate:string;

    constructor(memberId:number, bookId:number, dueDate:string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    getMemberId():number { return this.memberId; }
    getBookId():number { return this.bookId; }
    getDueDate():string { return this.dueDate; }
}

class Member {
    private id:number;
    private name:string;
    private contact:string;
    private lendedBooks:LendedBooks[] = [];
    private status:string;

    constructor(id:number, name:string, contact:string, status:string = "active") {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }

    getId():number { return this.id; }
    getName():string { return this.name; }
    getContact():string { return this.contact; }
    getLendedBook():LendedBooks[] { return this.lendedBooks; }
    getStatus():string { return this.status; }

    setStatus(status:string):void { this.status = status; }

    lendBook(book:LendedBooks):void {
        this.lendedBooks.push(book);
    }
}

class Library {
    private books:Book[] = [];
    private members:Member[] = [];

    addBook(book:Book):void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.getTitle()}`);
    }

    showBook():void {
        if (this.books.length === 0) {
            console.log("Không có sách nào trong thư viện");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book) => {
            console.log(`ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getStock()}, Trạng thái: ${book.getStatus()}`);
        });
    }
}

// Test
const library = new Library();
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "available");
const book2 = new Book(2, "Học Java OOP", "Trần Thị B", 3, "available");
const book3 = new Book(3, "Cấu trúc dữ liệu & Giải thuật", "Lê Văn C", 2, "available");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBook();
