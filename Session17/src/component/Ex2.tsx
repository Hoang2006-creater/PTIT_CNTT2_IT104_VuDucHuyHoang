import { useState } from 'react'
export default function Ex2() {
    const [product]=useState({
        id:1,
        name:"Dien thoai",
        price:2000,
        quantity:1
    })
  return (
    <div>
        <h2>Thong tin san pham</h2>
        <p>ID:{product.id}</p>
        <p>Ten:{product.name}</p>
        <p>Gia:{product.price}</p>
        <p>Quantity:{product.quantity}</p>
    </div>
  )
}
