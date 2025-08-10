class Books {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    public setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(newYear: number): void {
        this.year = newYear;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }
}

class Libarys {
    private books: Books[] = [];

    public addBook(book: Books): void {
        this.books.push(book);
    }

    public displayBook(): void {
        this.books.forEach(book => console.log(book.getInfo()));
    }

    public deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);

        if (this.books.length < initialLength) {
            console.log(`Đã xóa sách với ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
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
        } else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }

    public searchBookByTitle(keyword: string): void {
        let foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (foundBooks.length > 0) {
            console.log(`Các sách tìm thấy với từ khóa "${keyword}":`);
            foundBooks.forEach(book => console.log(book.getInfo()));
        } else {
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
