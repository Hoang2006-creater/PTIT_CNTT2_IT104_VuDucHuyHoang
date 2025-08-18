class Customer{
    private static nextId=1
    public id:number
    public name:string
    public email:string
    public shippingAddress:string
    constructor(name:string,email:string,shippingAddress:string) {
        this.id=Customer.nextId++
        this.name=name
        this.email=email
        this.shippingAddress=shippingAddress
    }
    getDetails():string{
        return `KH #${this.id}:${this.name},Email${this.email},Dia chi ${this.shippingAddress}`
    }
}   
abstract class Product{
    private static nextId=1
    public id:number
    public name:string
    public price:number
    public stock:number
    constructor(name:string,price:number,stock:number) {
        this.id=Product.nextId++
        this.name=name
        this.price=price
        this.stock=stock
    }
    sell(quantity:number):void{
        if(this.stock>=quantity){
            this.stock-=quantity
        }else{
            console.log("Khong du hang trong kho");
        }
    }
    restock(quantity: number){
        this.stock+=quantity
    }
    abstract getProductInfo(): string
    abstract getShippingCost(distance: number): number
    abstract getCategory(): string
}
class ElectronicsProduct extends Product{
    public warrantyPeriod:number
    constructor(name:string,price:number,stock:number,warrantyPeriod:number) {
        super(name,price,stock)
        this.warrantyPeriod=warrantyPeriod
    }
    getProductInfo(): string {
        return`Do dien tu:${this.name},Gia:${this.price},Bao hanh${this.warrantyPeriod}`
    }
    getShippingCost(distance: number): number {
        return 50000
    }
    getCategory(): string {
        return "Electronics"
    }
}
class ClothingProduct extends Product{
    public size:string
    public color: string
    constructor(name:string,price:number,stock:number,size:string,color:string){
        super(name,price,stock)
        this.size=size
        this.color=color
     }
     getProductInfo(): string {
        return`Quan ao:${this.name},Gia:${this.price},Size:${this.size},Mau sac:${this.color}`
    }
    getShippingCost(distance: number): number {
        return 25000
    }
    getCategory(): string {
        return "Clothers"
    }
}
class Order {
    private static nextId=1
    public orderId:number
    public customer:Customer
    public products:{product:Product,quantity:number}[]
    public totalAmount:number=0
    constructor(customer:Customer,products:{product:Product,quantity:number}[]){
        this.orderId=Order.nextId++
        this.customer=customer
        this.products=products
        this.totalAmount=products.reduce((sum,p)=>sum+p.product.price*p.quantity,0)
    }
    getDetails():string{
        let productList=this.products.map(p=>`-${p.product.name} x ${p.quantity}`).join("\n")
        return `Đơn hàng #${this.orderId}, Khách: ${this.customer.name}, Tổng: ${this.totalAmount}\nSản phẩm:\n${productList}`;
    }
}
class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string): void {
        this.customers.push(new Customer(name, email, address));
    }

    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
        let customer = this.findEntityById(this.customers, customerId);
        if (!customer) return null;

        let orderProducts: { product: Product, quantity: number }[] = [];
        for (let pq of productQuantities) {
            let product = this.findEntityById(this.products, pq.productId);
            if (!product || product.stock < pq.quantity) return null;
            product.sell(pq.quantity);
            orderProducts.push({ product, quantity: pq.quantity });
        }

        let order = new Order(customer, orderProducts);
        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number): void {
        let idx = this.orders.findIndex(o => o.orderId === orderId);
        if (idx === -1) return;
        let order = this.orders[idx];
        order.products.forEach(p => p.product.restock(p.quantity));
        this.orders.splice(idx, 1);
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }

    countProductsByCategory(): void {
        let count: Record<string, number> = {};
        this.products.forEach(p => {
            count[p.getCategory()] = (count[p.getCategory()] || 0) + 1;
        });
        console.log("Thống kê sản phẩm:", count);
    }

    listCustomerOrders(customerId: number): void {
        console.log(`Đơn hàng của khách #${customerId}:`);
        this.orders.filter(o => o.customer.id === customerId).forEach(o => console.log(o.getDetails()));
    }

    listAvailableProducts(): void {
        console.log("Sản phẩm còn hàng:");
        this.products.filter(p => p.stock > 0).forEach(p => {
            console.log(p.getProductInfo(), `- Còn lại: ${p.stock}`);
        });
    }

    updateProductStock(productId: number, newStock: number) {
        let idx = this.products.findIndex(p => p.id === productId);
        if (idx !== -1) {
            this.products[idx].stock = newStock;
        }
    }

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(c => c.id === id);
    }
}
let store=new Store()
let choice:string|null
do{
    choice=prompt(  `===== MENU QUẢN LÝ E-COMMERCE =====
    1. Thêm khách hàng
    2. Thêm sản phẩm
    3. Tạo đơn hàng
    4. Hủy đơn hàng
    5. Hiển thị sản phẩm còn hàngd
    6. Hiển thị đơn hàng của khách
    7. Tính doanh thu
    8. Thống kê sản phẩm theo danh mục
    9. Cập nhật tồn kho
    10. Tìm kiếm theo ID
    11.Xem thông tin chi tiết (bảo hành/size, màu) của một sản phẩm (sử dụng find)
    12. Thoát
    Chọn: `)
  switch (choice) {
    case "1":
        let name = prompt("Tên khách:");
        let email = prompt("Email:");
        let addr = prompt("Địa chỉ:");
        if (name && email && addr) {
            store.addCustomer(name, email, addr);
        }
        break;

    case "2":
        let type = prompt("Chọn loại (1. Điện tử, 2. Quần áo):");
        let pname = prompt("Tên sản phẩm:");
        let price = Number(prompt("Giá:"));
        let stock = Number(prompt("Số lượng:"));
        if (type === "1") {
            let warranty = Number(prompt("Thời gian bảo hành (tháng):"));
            store.addProduct(new ElectronicsProduct(pname!, price, stock, warranty));
        } else {
            let size = prompt("Size:");
            let color = prompt("Màu:");
            store.addProduct(new ClothingProduct(pname!, price, stock, size!, color!));
        }
        break;

    case "3":
        let cid = Number(prompt("ID khách hàng:"));
        let pid = Number(prompt("ID sản phẩm:"));
        let qty = Number(prompt("Số lượng:"));
        let order = store.createOrder(cid, [{ productId: pid, quantity: qty }]);
        if (order) {
            console.log("Tạo đơn thành công:\n" + order.getDetails());
        } else {
            console.log("Lỗi khi tạo đơn!");
        }
        break;

    case "4":
        let oid = Number(prompt("ID đơn hàng cần hủy:"));
        store.cancelOrder(oid);
        console.log("Đã hủy đơn hàng!");
        break;

    case "5":
        store.listAvailableProducts();
        break;

    case "6":
        let cid2 = Number(prompt("ID khách hàng:"));
        store.listCustomerOrders(cid2);
        break;

    case "7":
        console.log("Tổng doanh thu:", store.calculateTotalRevenue());
        break;

    case "8":
        store.countProductsByCategory();
        break;

    case "9":
        let pid2 = Number(prompt("ID sản phẩm:"));
        let newStock = Number(prompt("Số lượng mới:"));
        store.updateProductStock(pid2, newStock);
        break;

    case "10":
        let searchType = prompt("Tìm (1. Khách, 2. Sản phẩm):");
        let searchId = Number(prompt("Nhập ID:"));
        if (searchType === "1") {
            let cus = store.findEntityById(store.customers, searchId);
            if (cus) {
                console.log(cus.getDetails());
            } else {
                console.log("Không tìm thấy!");
            }
        } else {
            let prod = store.findEntityById(store.products, searchId);
            if (prod) {
                console.log(prod.getProductInfo());
            } else {
                console.log("Không tìm thấy!");
            }
        }
        break;
        case "11":
            let prodId = Number(prompt("Nhập ID sản phẩm cần xem:"));
            let prod = store.findEntityById(store.products, prodId);
            if (prod) {
                console.log("Thông tin chi tiết:", prod.getProductInfo());
            } else {
                console.log("Không tìm thấy sản phẩm!");
            }
            break;
        case "12":
        console.log("Thoat thanh cong");
        break
    }   
}while(choice!=="12")
