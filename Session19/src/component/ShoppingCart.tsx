import {useMemo} from 'react'
const cartItem =[
{id:1,name:"San phan A",price:10000,quantity:2},
{id:2,name:"San pham B",price:20000,quantity:1},
]

export default function ShoppingCart() {
    const total =useMemo(()=>{
        return cartItem.reduce(
            (sum,item)=>sum+item.price*item.quantity,0
        )
    },[])
  return (
    <div>
        <h2>Gio hang</h2>
        <ul>{cartItem.map((item)=>(
            <li key={item.id}>
                {item.name}_{item.quantity}*{item.price}={""}
                <strong>{item.price*item.quantity}</strong>
            </li>
        ))}</ul>
        <h3>Tong cong:{total}</h3>
        </div>
  )
}
