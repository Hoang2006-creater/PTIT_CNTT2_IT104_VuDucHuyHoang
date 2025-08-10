class Books{
    private id:number
    private title:string
    private author:string
    constructor(id:number,title:string,author:string) {
        this.id=id
        this.title=title
        this.author=author
    }
    public getId():number{
        return this.id
    }
    public setTitle(newTitle:string):void{
        this.title=newTitle
    }
    public setAuthor(newAuthor:string):void{
        this.author=newAuthor
    }
    public getTitle():string{
        return this.title
    }
    public getInfo():string{
        return `ID:${this.id},Tieu de: ${this.title},Tac gia: ${this.author}`
    }
}
class Libarys{
    private books:Books[]=[]
    public addBook(books:Books):void{
        this.books.push(books)
    }
    public displayBook():void{
        this.books.forEach(books=>{
            console.log(books.getInfo());
        })
    }
    public updateBookById(id:number,newTitle:string,newAuthor:string):void{
        let found =false
        this.books.forEach(book=>{
            if(book.getId()===id){
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                found=true
            }
        })
    }
    public searchBookByTitle(keyword:string):void{
        let foundBooks=this.books.filter(book=>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        )
        if(foundBooks.length>0){
            console.log(`Cac sach tim thay voi tu khoa ${keyword}`);
            foundBooks.forEach(book=>console.log(book.getInfo()))
        }else{
            console.log("Khong tim thay sach nao ");
            
        }
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
librarys.searchBookByTitle("python");