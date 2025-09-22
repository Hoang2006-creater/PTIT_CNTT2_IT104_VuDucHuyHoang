export type Product={
    id:number;
    name:string
    price:number
    img:string
    stock:number
}
export type CartProduct=Product &{quantity:number}