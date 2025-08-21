import  { Component } from 'react'

interface PropType{
    fullName:string
}
export default class Exercises01 extends Component<PropType> {
  render() {
    
    return (
      <div>Ho va Ten:{this.props.fullName}</div>
    )
  }
}
