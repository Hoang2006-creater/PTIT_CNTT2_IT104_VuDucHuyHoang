import { Component } from 'react'
interface ChildrenProps{
    name:string
}
export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div><h2>Ho va Ten Component con:{this.props.name}</h2></div>
    )
  }
}
