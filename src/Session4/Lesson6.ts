interface Product{
    id:string,
    name:string,
    price:number,
    category:{
        id:string,
        name:string
    }    
    discount?:number;
}
const listProduct:Product[]=[
    {
        id:"P001",
        name:"Lo vi song",
        price:1000,
        category:{
            id:"C01",
            name:"kitchen"
        },
        discount:1000
    },
      {
        id:"P002",
        name:"TiVi",
        price:2000,
        category:{
            id:"C02",
            name:"eletronic"
        },
        discount:2000
    },
      {
        id:"P003",
        name:"Dien thoai",
        price:3000,
        category:{
            id:"C03",
            name:"mobilePhone"
        },
    }
]
function getFinalPrice(product:Product):number{
    if(product.discount!==undefined){
        return product.price*(1-product.discount/100)
    }
    return product.price
}
function printProductInfo(product:Product):void{
    const finalPrice=getFinalPrice(product)
    console.log(`Mã sản phẩm: ${product.id}`);
    console.log(`Tên sản phẩm: ${product.name}`);
    console.log(`Danh mục: ${product.category.name}`);
    console.log(`Giá gốc: $${product.price}`)
    if(product.discount!==undefined){
        console.log(`Giam gia:${product.discount}%`);
        console.log(`Sau giam gia ${finalPrice.toFixed(2)}`);
    }else{
        console.log("Khong co giam gia");
    }
}
listProduct.forEach(printProductInfo)