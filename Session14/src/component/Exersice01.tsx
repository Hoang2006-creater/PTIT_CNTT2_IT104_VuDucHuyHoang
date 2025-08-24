import { Component } from 'react'
type State={
    userName:string
}   
export default class Exersice01 extends Component <object,State>{
    constructor(props:object){
        super(props)
        this.state={
            userName:"Hoang"
        }
    }
  render() {
    return (
      <div>
        <h2>Xin chao {this.state.userName}</h2>
      </div>
    )
  }
}
