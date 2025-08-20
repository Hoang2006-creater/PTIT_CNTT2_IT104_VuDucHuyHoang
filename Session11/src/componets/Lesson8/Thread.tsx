import { Component } from 'react'

export default class Thead extends Component {
  render() {
    return (
      <tr style={{backgroundColor:"lightgray",borderTopLeftRadius:"10px",border:"1px solid gray",borderRadius:"5px"}}>
        <td style={{textAlign:'center',padding:"10px"}}>STT</td>
        <td style={{textAlign:'center',padding:"10px"}}>Ho va ten</td>
        <td style={{textAlign:'center',padding:"10px"}}>Ngay sinh</td>
        <td style={{textAlign:'center',padding:"10px"}}>Gioi tinh</td>
        <td style={{textAlign:'center',padding:"10px"}}>Dia chi</td>
        <td style={{textAlign:'center',padding:"10px"}}>Hanh dong</td>
      </tr>
    )
  }
}