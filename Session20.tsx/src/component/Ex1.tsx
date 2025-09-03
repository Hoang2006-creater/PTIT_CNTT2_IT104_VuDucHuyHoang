import { useState } from "react"
export default function Ex1() {
    const [text,setText]=useState(" ")
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
    }
  return (
    <div style ={{padding:"20px"}}>
        <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhap vao day"
        style={{padding:"8px"}}/>
        {text.length> 5 &&(
            <p style={{color:"red",marginTop:"10px"}}>
        Chuoi ban nhap dai hon 5 ky tu </p>
    )}
    </div>
  )
}
