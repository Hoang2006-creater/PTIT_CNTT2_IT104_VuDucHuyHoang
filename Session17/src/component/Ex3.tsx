import { useState } from "react"

export default function Ex3() {
    const [color,setColor]=useState("Black")
    const changeColor=()=>{
        setColor(color==="black"?"red":"black")
    }
  return (
    <div>
        <h2 style={{color:color}}>Tieu de van ban</h2>
        <button onClick={changeColor}>Doi mau chu</button>
    </div>
  )
}
