import { Component, type ChangeEvent, type FormEvent } from 'react'
type State={
    productCode:string;
    productName:string,
    price:number,
    quantity:number
}
export default class Ex5 extends Component<object,State> {
    constructor(props:object){
        super(props)
        this.state={
          productCode:"",
          productName:"",
          price:0,
          quantity:1
        }
    }
    handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      const{name,value}=e.target
      this.setState({
        ...this.state,
        [name]:name==="price"||name==="quantity"?Number(value):value,
      })
    }
    handleSubmit=(e:FormEvent)=>{
      e.preventDefault();
      console.log("Product",this.state);
    }
  render() {
    return (
      <div style={{maxWidth:"400px",margin:"20px auto"}}>
        <h2>Them ma san pham</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Ma san pham</label>
            <input type="text" name="productCode" value={this.state.productCode} onChange={this.handleChange}/>
            </div>
             <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    )
  }
}
