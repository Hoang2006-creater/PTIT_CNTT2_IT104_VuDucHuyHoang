abstract class Movie {
    private static nextId = 1;
    public id: number;
    public isShowing: boolean = true;

    constructor(
        public title: string,
        public ticketPrice: number,
        public genre: string
    ) {
        this.id = Movie.nextId++;
    }

    startShow(): void { 
        this.isShowing = true; 
    }
    stopShow(): void { 
        this.isShowing = false; 
    }

    abstract calculateTicketCost(quantity: number, childCount?: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;
}
class ActionMovie extends Movie {
    constructor(title: string, price: number) {
        super(title, price, "Hành động");
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers(): string[] {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo(): string {
        return "Phim hành động gay cấn, kỹ xảo hoành tráng";
    }
}

class ComedyMovie extends Movie {
    constructor(title: string, price: number) {
        super(title, price, "Hài");
    }
    calculateTicketCost(quantity: number): number {
        if (quantity > 4) {
            return this.ticketPrice * quantity * 0.9;
        } else {
            return this.ticketPrice * quantity;
        }
    }
    getSpecialOffers(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo(): string {
        return "Phim hài nhẹ nhàng, vui nhộn";
    }
}

class AnimationMovie extends Movie {
    constructor(title: string, price: number) {
        super(title, price, "Hoạt hình");
    }
    calculateTicketCost(quantity: number, childCount: number = 0): number {
        return this.ticketPrice * quantity - childCount * (this.ticketPrice * 0.5);
    }
    getSpecialOffers(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo(): string {
        return "Phim hoạt hình với hình ảnh sống động";
    }
}
class Audience {
    private static nextId = 1;
    public id: number;
    constructor(public name: string, public email: string, public phone: string) {
        this.id = Audience.nextId++;
    }
    getDetails(): string {
        return `KH #${this.id}: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}
class TicketBooking {
    private static nextId = 1;
    public id:number
    public bookingId: number;
    public totalPrice: number;
    constructor(public audience: Audience, public movie: Movie, public quantity: number, childCount: number = 0) {
        this.bookingId = TicketBooking.nextId++;
        this.id=this.bookingId
        if (movie instanceof AnimationMovie)
            this.totalPrice = movie.calculateTicketCost(quantity, childCount);
        else
            this.totalPrice = movie.calculateTicketCost(quantity);
    }
    getDetails(): string {
        return `Đặt vé #${this.bookingId}: ${this.audience.name} | Phim: ${this.movie.title} | SL: ${this.quantity} | Tổng: ${this.totalPrice}`;
    }
}

class Cinema {
    movies: Movie[] = [];
    audiences: Audience[] = [];
    bookings: TicketBooking[] = [];

    addMovie(movie: Movie): void { this.movies.push(movie); }
    addAudience(name: string, email: string, phone: string): Audience {
        let a = new Audience(name, email, phone);
        this.audiences.push(a);
        return a;
    }
    bookTickets(audienceId: number, movieId: number, quantity: number, childCount: number = 0): TicketBooking | null {
        let aud = this.findEntityById(this.audiences, audienceId);
        let mov = this.findEntityById(this.movies, movieId);
        if (!aud || !mov || !mov.isShowing) return null;
        let booking = new TicketBooking(aud, mov, quantity, childCount);
        this.bookings.push(booking);
        return booking;
    }
    cancelMovie(movieId: number): void {
        let mov = this.findEntityById(this.movies, movieId);
        if (mov) mov.stopShow();
    }
    listShowingMovies(): void {
        console.log("Phim đang chiếu:");
        this.movies.filter(m => m.isShowing).forEach(m => console.log(`${m.id}. ${m.title} (${m.genre})`));
    }
    listAudienceBookings(audienceId: number): void {
        console.log("Vé của KH #" + audienceId);
        this.bookings.filter(b => b.audience.id === audienceId).forEach(b => console.log(b.getDetails()));
    }
    calculateTotalRevenue(): number {
        return this.bookings.reduce((sum, b) => sum + b.totalPrice, 0);
    }
    getMovieGenreCount(): void {
        let result: Record<string, number> = {};
        this.movies.forEach(m => result[m.genre] = (result[m.genre] || 0) + 1);
        console.log("Thống kê phim:", result);
    }
    getMovieSpecialOffers(movieId: number): void {
        let mov = this.findEntityById(this.movies, movieId);
        console.log(mov ? mov.getSpecialOffers() : "Không tìm thấy phim");
    }
    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(e => e.id === id);
    }
}

let cinema = new Cinema();

function mainMenu() {
    let choice: string | null;
    do {
        choice = prompt(
`===== MENU RẠP PHIM =====
1. Thêm khán giả
2. Thêm phim
3. Đặt vé
4. Ngừng chiếu phim
5. Hiển thị phim đang chiếu
6. Hiển thị vé của khán giả
7. Tính doanh thu
8. Đếm phim theo thể loại
9. Tìm kiếm theo ID
10. Ưu đãi của phim
0. Thoát`);
        switch (choice) {
            case "1":
                let n = prompt("Tên:");
                let e = prompt("Email:");
                let p = prompt("Phone:");
                if (n && e && p) cinema.addAudience(n, e, p);
                break;
            case "2":
                let t = prompt("Loại (1.Hành động 2.Hài 3.Hoạt hình):");
                let title = prompt("Tên phim:");
                let price = Number(prompt("Giá vé:"));
                if (t === "1") cinema.addMovie(new ActionMovie(title!, price));
                else if (t === "2") cinema.addMovie(new ComedyMovie(title!, price));
                else cinema.addMovie(new AnimationMovie(title!, price));
                break;
            case "3":
            let aid = Number(prompt("ID khán giả:"));
            let mid = Number(prompt("ID phim:"));
            let q = Number(prompt("Số lượng vé:"));

            let child = 0;
            if (cinema.findEntityById(cinema.movies, mid) instanceof AnimationMovie) {
            child = Number(prompt("Số trẻ em (<12):"));
            } else {
            child = 0;
            }

            let b = cinema.bookTickets(aid, mid, q, child);
            if (b) {
            console.log(b.getDetails());
            } else {
            console.log("Đặt vé thất bại!");
            }
            break;
            case "4":
                let mid2 = Number(prompt("ID phim ngừng chiếu:"));
                cinema.cancelMovie(mid2);
                break;
            case "5":
                cinema.listShowingMovies();
                break;
            case "6":
                let aid2 = Number(prompt("ID khán giả:"));
                cinema.listAudienceBookings(aid2);
                break;
            case "7":
                console.log("Tổng doanh thu:", cinema.calculateTotalRevenue());
                break;
            case "8":
                cinema.getMovieGenreCount();
                break;
            case "9":
                let type = prompt("Tìm (1.Khán giả 2.Phim 3.Vé):");
                let id = Number(prompt("Nhập ID:"));
                if (type === "1") console.log(cinema.findEntityById(cinema.audiences, id));
                else if (type === "2") console.log(cinema.findEntityById(cinema.movies, id));
                else console.log(cinema.findEntityById(cinema.bookings, id));
                break;
            case "10":
                let mid3 = Number(prompt("ID phim:"));
                cinema.getMovieSpecialOffers(mid3);
                break;
        }
    } while (choice !== "0");
}

mainMenu()