import { Component } from 'react'
interface Product{
    id:number
    name:string;
    price:number;
    quantity:number;
}
interface Props{
    product:Product
}
export default class ChildrenComponent extends Component<Props> {
  render() {
    const {product}=this.props
    return (
      <div>
    <p>ID:{product.id}</p>
    <p>Product Name:{product.name}</p>
    <p>Price:{product.price}</p>
    <p>Quantity:{product.quantity}</p>
    </div>
    )
  }
}
