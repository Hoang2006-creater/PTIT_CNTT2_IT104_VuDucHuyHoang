"use strict";
class Customer {
    constructor(name, email, shippingAddress) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `KH #${this.id}:${this.name},Email${this.email},Dia chi ${this.shippingAddress}`;
    }
}
Customer.nextId = 1;
class Product {
    constructor(name, price, stock) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        }
        else {
            console.log("Khong du hang trong kho");
        }
    }
    restock(quantity) {
        this.stock += quantity;
    }
}
Product.nextId = 1;
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `Do dien tu:${this.name},Gia:${this.price},Bao hanh${this.warrantyPeriod}`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, warrantyPeriod, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `Quan ao:${this.name},Gia:${this.price},Size:${this.size},Mau sac:${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Clothers";
    }
}
class Order {
    constructor(customer, products) {
        this.totalAmount = 0;
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = products.reduce((sum, p) => sum + p.product.price * p.quanity, 0);
    }
    getDetails() {
        let productList = this.products.map(p => `-${p.product.name} x ${p.quanity}`).join("\n");
        return `Đơn hàng #${this.orderId}, Khách: ${this.customer.name}, Tổng: ${this.totalAmount}\nSản phẩm:\n${productList}`;
    }
}
Order.nextId = 1;
