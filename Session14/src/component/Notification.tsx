import { Component } from 'react'

export default class Notification extends Component {
    componentDidMount(): void {
        console.log("Component đã được mount!");
    }   
  render() {
    return (
      <div>Notification </div>
    )
  }
}
