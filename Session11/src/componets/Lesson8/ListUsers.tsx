import { Component } from "react"
import Body from "./Body"
import Thead from "./Thread"

export default class ListUsers extends Component {
  render() {
    return (
      <div style={{borderRadius:"10px",overflow:"hidden",paddingBottom:"20px",backgroundColor:"lightgray"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <Thead/>
          <Body/>
        </table>
      </div>
      
    )
  }
}