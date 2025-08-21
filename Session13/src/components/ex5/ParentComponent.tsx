import {Component } from 'react'
import ChildrenComponent from './ChildrenComponent';
interface Product{
    id:number;
    name:string;
    price:number;
    quantity:number;
}
interface State{
    product:Product;
}
export default class ParentComponent extends Component <object,State>{
    state:State={
        product:{
            id:1,
            name:"Buoi ba roi",
            price:12000,
            quantity:6
        }
    }
    render() {
    return (
      <div>ParentComponent
        <ChildrenComponent product ={this.state.product}/>
      </div>
    )
  }
}
