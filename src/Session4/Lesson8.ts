type Products={
    readonly id:string;
    name:string,
    price:number
}
type orderItem={
    product:Products,
    quanity:number;
}
type Order={
    orderId:string,
    customerName:string 
    items:orderItem[]
    note?:string
}
function calculateOrderTotal(order:Order):number{
    let total=0
    for(let item of order.items){
        total+=item.product.price*item.quanity
    }
    return total
}
function printOrder(order:Order):void{
    console.log(`Don hang: ${order.orderId}`);
    console.log(`Khach hang:${order.customerName}`);
    console.log("San phan");
    for(let item of order.items){
    const name = item.product.name;
    const qty = item.quanity;
    const price = item.product.price * qty;
    console.log(`- ${name} × ${qty} → ${price.toLocaleString()} VND`);
  }

  const total = calculateOrderTotal(order);
  console.log(`Tong cong: ${total.toLocaleString()} VND`);

  if (order.note) {
    console.log(`Ghi chu: ${order.note}`);
  }
}

const shirt: Products = { id: "p1", name: "Ao so mi", price: 250000 };
const pants: Products = { id: "p2", name: "Quan tay", price: 400000 };
const myOrder: Order = {
  orderId: "ORD001",
  customerName: "Nguyen Van A",
  items: [
    { product: shirt, quanity: 2 },
    { product: pants, quanity: 1 }
  ],
  note: "Giao sau 18h"
};

printOrder(myOrder);