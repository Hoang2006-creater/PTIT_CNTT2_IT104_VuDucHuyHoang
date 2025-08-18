class Passenger {
    private static nextId = 1;
    public id: number;

    constructor(public name: string, public passportNumber: string) {
        this.id = Passenger.nextId++;
    }

    getPassengerInfo(): string {
        return `Passenger #${this.id}: ${this.name}, Passport: ${this.passportNumber}`;
    }
}
abstract class Flight {
    constructor(
        public flightNumber: string,
        public origin: string,
        public destination: string,
        public departureTime: Date,
        public capacity: number,
        public basePrice: number,
        public bookedSeats: number = 0
    ) {}

    abstract calculatePrice(): number;

    bookSeat(quantity: number): boolean {
        if (this.bookedSeats + quantity <= this.capacity) {
            this.bookedSeats += quantity;
            return true;
        }
        return false;
    }

    cancelSeat(quantity: number): void {
        this.bookedSeats = Math.max(0, this.bookedSeats - quantity);
    }

    getAvailableSeats(): number {
        return this.capacity - this.bookedSeats;
    }

    getFlightInfo(): string {
        return `${this.flightNumber} | ${this.origin} -> ${this.destination} | ${this.departureTime.toLocaleString()} | Còn ${this.getAvailableSeats()} chỗ | Giá: ${this.calculatePrice()}`;
    }
}
class DomesticFlight extends Flight {
    calculatePrice(): number {
        return this.basePrice; 
    }
}
class InternationalFlight extends Flight {
    calculatePrice(): number {
        return this.basePrice * 1.2;
    }
}

class Booking {
    private static nextId = 1;
    public id: number;
    public status: "active" | "cancelled" = "active";

    constructor(
        public passenger: Passenger,
        public flight: Flight,
        public tickets: number
    ) {
        this.id = Booking.nextId++;
    }

    cancel(): void {
        if (this.status === "active") {
            this.flight.cancelSeat(this.tickets);
            this.status = "cancelled";
        }
    }

    getBookingDetails(): string {
        return `Booking #${this.id} | Passenger: ${this.passenger.name} | Flight: ${this.flight.flightNumber} | Vé: ${this.tickets} | Trạng thái: ${this.status}`;
    }
}
class AirlineManager {
    private passengers: Passenger[] = [];
    private flights: Flight[] = [];
    private bookings: Booking[] = [];

    addPassenger(name: string, passport: string): void {
        const p = new Passenger(name, passport);
        this.passengers.push(p);
        console.log("Thêm hành khách:", p.getPassengerInfo());
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
        console.log("Thêm chuyến bay:", flight.getFlightInfo());
    }

    createBooking(passengerId: number, flightNumber: string, tickets: number): Booking | null {
        const passenger = this.passengers.find(p => p.id === passengerId);
        const flight = this.flights.find(f => f.flightNumber === flightNumber);

        if (passenger && flight && flight.bookSeat(tickets)) {
            const booking = new Booking(passenger, flight, tickets);
            this.bookings.push(booking);
            return booking;
        }
        return null;
    }

    cancelBooking(bookingId: number): void {
        const booking = this.bookings.find(b => b.id === bookingId);
        if (booking) booking.cancel();
    }

    listAvailableFlights(origin: string, destination: string): void {
        const list = this.flights.filter(f => f.origin === origin && f.destination === destination && f.getAvailableSeats() > 0);
        console.log("Danh sách chuyến bay còn chỗ:");
        list.forEach(f => console.log(f.getFlightInfo()));
    }

    listBookingsByPassenger(passengerId: number): void {
        const list = this.bookings.filter(b => b.passenger.id === passengerId);
        console.log("Booking của hành khách:");
        list.forEach(b => console.log(b.getBookingDetails()));
    }

    calculateTotalRevenue(): number {
        return this.bookings
            .filter(b => b.status === "active")
            .reduce((sum, b) => sum + b.tickets * b.flight.calculatePrice(), 0);
    }

    countFlightsByType(): void {
        const domestic = this.flights.filter(f => f instanceof DomesticFlight).length;
        const international = this.flights.filter(f => f instanceof InternationalFlight).length;
        console.log(`Nội địa: ${domestic}, Quốc tế: ${international}`);
    }

    updateFlightTime(flightNumber: string, newTime: Date): void {
        const f = this.flights.find(f => f.flightNumber === flightNumber);
        if (f) {
            f.departureTime = newTime;
            console.log("Cập nhật giờ bay thành công:", f.getFlightInfo());
        }
    }

    getFlightPassengerList(flightNumber: string): void {
        const list = this.bookings.filter(b => b.flight.flightNumber === flightNumber && b.status === "active");
        console.log("Danh sách hành khách trên chuyến bay:");
        list.forEach(b => console.log(b.passenger.getPassengerInfo()));
    }
}


const manager = new AirlineManager();

function mainMenu() {
    let choice: string | null;
    do {
        choice = prompt(
`===== MENU QUẢN LÝ HÀNG KHÔNG =====
1. Thêm hành khách
2. Thêm chuyến bay
3. Tạo booking
4. Hủy booking
5. Liệt kê chuyến bay còn ghế
6. Xem booking của hành khách
7. Tính tổng doanh thu
8. Đếm chuyến bay theo loại
9. Cập nhật giờ bay
10. Danh sách hành khách trên chuyến bay
11. Thoát
Chọn: `);

        switch (choice) {
            case "1":
                let pname = prompt("Tên hành khách:");
                let passport = prompt("Số hộ chiếu:");
                if (pname && passport) manager.addPassenger(pname, passport);
                break;

            case "2":
                let ftype = prompt("Loại (1. Nội địa, 2. Quốc tế):");
                let fnum = prompt("Số hiệu chuyến bay:");
                let origin = prompt("Điểm đi:");
                let dest = prompt("Điểm đến:");
                let cap = Number(prompt("Sức chứa:"));
                let price = Number(prompt("Giá vé:"));
                let time = new Date(prompt("Giờ khởi hành (yyyy-mm-dd hh:mm):") || "");
                if (ftype === "1")
                    manager.addFlight(new DomesticFlight(fnum!, origin!, dest!, time, cap, price));
                else
                    manager.addFlight(new InternationalFlight(fnum!, origin!, dest!, time, cap, price));
                break;

            case "3":
                let pid = Number(prompt("ID hành khách:"));
                let fnum2 = prompt("Số hiệu chuyến bay:");
                let tickets = Number(prompt("Số vé:"));
                let booking = manager.createBooking(pid, fnum2!, tickets);
                console.log(booking ? "Đặt vé thành công:\n" + booking.getBookingDetails() : "Đặt vé thất bại!");
                break;

            case "4":
                let bid = Number(prompt("ID booking cần hủy:"));
                manager.cancelBooking(bid);
                console.log("Đã hủy booking!");
                break;

            case "5":
                let o = prompt("Điểm đi:");
                let d = prompt("Điểm đến:");
                manager.listAvailableFlights(o!, d!);
                break;

            case "6":
                let pid2 = Number(prompt("ID hành khách:"));
                manager.listBookingsByPassenger(pid2);
                break;

            case "7":
                console.log("Tổng doanh thu:", manager.calculateTotalRevenue());
                break;

            case "8":
                manager.countFlightsByType();
                break;

            case "9":
                let fnum3 = prompt("Số hiệu chuyến bay:");
                let newTime = new Date(prompt("Giờ khởi hành mới (yyyy-mm-dd hh:mm):") || "");
                manager.updateFlightTime(fnum3!, newTime);
                break;

            case "10":
                let fnum4 = prompt("Số hiệu chuyến bay:");
                manager.getFlightPassengerList(fnum4!);
                break;
            case "11":
                break
        }
    } while (choice !== "10");
}

mainMenu();
