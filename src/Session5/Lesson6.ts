// ------------------- Lớp Book -------------------
class Book {
    constructor(
        private id: number,
        private title: string,
        private author: string,
        private stock: number,
        private status: string // "available", "borrowed", ...
    ) {}

    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getStock(): number {
        return this.stock;
    }
    getStatus(): string {
        return this.status;
    }

    setStock(stock: number): void {
        this.stock = stock;
    }
    setStatus(status: string): void {
        this.status = status;
    }
}

// ------------------- Lớp LendedBook -------------------
class LendedBook {
    constructor(
        private memberId: number,
        private bookId: number,
        private dueDate: string
    ) {}

    getMemberId(): number {
        return this.memberId;
    }
    getBookId(): number {
        return this.bookId;
    }
    getDueDate(): string {
        return this.dueDate;
    }
}

// ------------------- Lớp Member -------------------
class Member {
    private lendedBooks: LendedBook[] = [];

    constructor(
        private id: number,
        private name: string,
        private contact: string,
        status: string = "active" // "active" hoặc "locked"
    ) {
        this.status = status;
    }

    private status: string;

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getContact(): string {
        return this.contact;
    }
    getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }
    getStatus(): string {
        return this.status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    lendBook(book: LendedBook): void {
        this.lendedBooks.push(book);
    }
}

// ------------------- Lớp Library -------------------
class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    // Thêm sách
    addBook(book: Book): void {
        this.books.push(book);
        console.log(`📚 Đã thêm sách: ${book.getTitle()}`);
    }

    // Hiển thị tất cả sách
    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Không có sách nào trong thư viện.");
            return;
        }
        console.log("\n📖 Danh sách sách trong thư viện:");
        this.books.forEach((book) => {
            console.log(
                `ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getStock()}, Tình trạng: ${book.getStatus()}`
            );
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
