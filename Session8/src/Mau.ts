abstract class Product {
    private static nextId: number = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): void {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log(`Not enough stock for product ${this.name}`);
        }
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(distance: number): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;

    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} months`;
    }

    getShippingCost(distance: number): number {
        return 50000;
    }

    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product {
    size: string;
    color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`;
    }

    getShippingCost(distance: number): number {
        return 25000;
    }

    getCategory(): string {
        return "Clothing";
    }
}

class Customer {
    private static nextId: number = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}

class Order {
    private static nextId: number = 1;
    orderId: number;
    customer: Customer;
    products: { product: Product, quantity: number }[];
    totalAmount: number;

    constructor(customer: Customer, products: { product: Product, quantity: number }[]) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }

    private calculateTotal(): number {
        return this.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    getDetails(): string {
        let details = `Order ID: ${this.orderId}, Customer: ${this.customer.name}, Total: ${this.totalAmount}\nProducts:\n`;
        this.products.forEach(item => {
            details += `${item.product.name} x ${item.quantity}\n`;
        });
        return details;
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
        const customer = new Customer(name, email, address);
        this.customers.push(customer);
    }

    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
        const customer = this.findEntityById(this.customers, customerId);
        if (!customer) {
            console.log("Customer not found");
            return null;
        }

        const orderProducts: { product: Product, quantity: number }[] = [];
        for (const pq of productQuantities) {
            const product = this.findEntityById(this.products, pq.productId);
            if (!product) {
                console.log(`Product ${pq.productId} not found`);
                return null;
            }
            if (product.stock < pq.quantity) {
                console.log(`Not enough stock for product ${product.name}`);
                return null;
            }
            orderProducts.push({ product, quantity: pq.quantity });
            product.sell(pq.quantity);
        }

        const order = new Order(customer, orderProducts);
        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach(item => {
                item.product.restock(item.quantity);
            });
            this.orders.splice(index, 1);
            console.log(`Order ${orderId} canceled`);
        } else {
            console.log("Order not found");
        }
    }

    listAvailableProducts(): void {
        const available = this.products.filter(p => p.stock > 0);
        if (available.length === 0) {
            console.log("No available products");
        } else {
            available.forEach(p => console.log(p.getProductInfo()));
        }
    }

    listCustomerOrders(customerId: number): void {
        const customerOrders = this.orders.filter(o => o.customer.id === customerId);
        if (customerOrders.length === 0) {
            console.log("No orders for this customer");
        } else {
            customerOrders.forEach(o => console.log(o.getDetails()));
        }
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((total, order) => total + order.totalAmount, 0);
    }

    countProductsByCategory(): void {
        const counts = this.products.reduce((acc: { [key: string]: number }, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        if (Object.keys(counts).length === 0) {
            console.log("No products");
        } else {
            for (const [cat, count] of Object.entries(counts)) {
                console.log(`${cat}: ${count}`);
            }
        }
    }

    updateProductStock(productId: number, newStock: number): void {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Stock updated for product ${productId}`);
        } else {
            console.log("Product not found");
        }
    }

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(item => item.id === id);
    }
}

function main() {
    const store = new Store();

    // Dữ liệu mẫu
    console.log("Khởi tạo dữ liệu mẫu...");

    // Thêm khách hàng
    store.addCustomer("Nguyen Van A", "a@example.com", "123 Hanoi");
    store.addCustomer("Tran Thi B", "b@example.com", "456 HCMC");
    console.log("Đã thêm khách hàng mẫu");

    // Thêm sản phẩm
    const laptop = new ElectronicsProduct("Laptop", 15000000, 10, 24);
    const shirt = new ClothingProduct("T-Shirt", 200000, 50, "M", "Blue");
    store.addProduct(laptop);
    store.addProduct(shirt);
    console.log("Đã thêm sản phẩm mẫu");

    // Mô phỏng menu với switch...case
    const menuChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Thực hiện lần lượt các chức năng
    for (const choice of menuChoices) {
        console.log(`\nThực hiện chức năng ${choice}:`);
        switch (choice) {
            case 1:
                console.log("1. Thêm khách hàng mới");
                store.addCustomer("Le Van C", "c@example.com", "789 Da Nang");
                console.log("Đã thêm khách hàng: Le Van C");
                break;
            case 2:
                console.log("2. Thêm sản phẩm mới");
                const phone = new ElectronicsProduct("Smartphone", 10000000, 20, 12);
                store.addProduct(phone);
                console.log("Đã thêm sản phẩm: Smartphone");
                break;
            case 3:
                console.log("3. Tạo đơn hàng mới");
                const order = store.createOrder(1, [
                    { productId: 1, quantity: 2 }, // 2 Laptop
                    { productId: 2, quantity: 5 }  // 5 T-Shirt
                ]);
                if (order) {
                    console.log("Đơn hàng đã được tạo:\n" + order.getDetails());
                }
                break;
            case 4:
                console.log("4. Hủy đơn hàng");
                store.cancelOrder(1);
                console.log("Sau khi hủy, danh sách sản phẩm còn hàng:");
                store.listAvailableProducts();
                break;
            case 5:
                console.log("5. Hiển thị danh sách sản phẩm còn hàng");
                store.listAvailableProducts();
                break;
            case 6:
                console.log("6. Hiển thị danh sách đơn hàng của khách hàng ID 1");
                store.listCustomerOrders(1);
                break;
            case 7:
                console.log("7. Tính và hiển thị tổng doanh thu");
                console.log("Tổng doanh thu: " + store.calculateTotalRevenue());
                break;
            case 8:
                console.log("8. Thống kê sản phẩm theo danh mục");
                store.countProductsByCategory();
                break;
            case 9:
                console.log("9. Cập nhật tồn kho cho sản phẩm ID 1");
                store.updateProductStock(1, 15);
                console.log("Danh sách sản phẩm sau khi cập nhật:");
                store.listAvailableProducts();
                break;
            case 10:
                console.log("10. Tìm kiếm và hiển thị thông tin bằng ID");
                console.log("Tìm kiếm khách hàng ID 1:");
                const customer = store.findEntityById(store.customers, 1);
                if (customer) {
                    console.log(customer.getDetails());
                } else {
                    console.log("Không tìm thấy khách hàng");
                }
                console.log("Tìm kiếm sản phẩm ID 2:");
                const product = store.findEntityById(store.products, 2);
                if (product) {
                    console.log(product.getProductInfo());
                } else {
                    console.log("Không tìm thấy sản phẩm");
                }
                break;
            case 11:
                console.log("11. Xem thông tin chi tiết sản phẩm ID 2");
                const prod = store.findEntityById(store.products, 2);
                if (prod) {
                    console.log(prod.getProductInfo());
                } else {
                    console.log("Không tìm thấy sản phẩm");
                }
                break;
            case 12:
                console.log("12. Thoát chương trình");
                return;
            default:
                console.log("Chức năng không hợp lệ");
        }
    }
}

main();