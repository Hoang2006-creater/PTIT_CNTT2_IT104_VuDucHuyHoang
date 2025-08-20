import { Component } from 'react'
<style></style>
export default class Body extends Component {
  render() {
    const listUser=[{name:"An",date:"21/03/1961",sex:"Nam",address:"New york"},{name:"Binh",date:"11/02/1990",sex:"Nu",address:"London"}]
    return (
      <tbody style={{border:"1px solid gray"}}>
        {listUser.map((t,i)=>{
            return <tr key={i} style={{backgroundColor:"white",border:"1px solid lightgray"}}>
                <td style={{textAlign:'center',padding:"10px"}}>{i+1}</td>
                <td style={{textAlign:'center',padding:"10px"}}>{t.name}</td>
                <td style={{textAlign:'center',padding:"10px"}}>{t.date}</td>
                <td style={{textAlign:'center',padding:"10px"}}>{t.sex}</td>
                <td style={{textAlign:'center',padding:"10px"}}>{t.address}</td>
                <td style={{textAlign:'center',padding:"10px",display:'flex',gap:"5px",justifyContent:'center'}}>
                    <button style={{padding:"5px",border:"1px solid gray",borderRadius:"5px"}}>Sua</button>
                    <button style={{backgroundColor:"red",padding:"5px",border:"1px solid gray",borderRadius:"5px"}}>Xoa</button>
                </td>
            </tr>
          })}
      </tbody>
    )
  }
}