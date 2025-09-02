import {useState,useRef} from 'react'
export default function RenderCounter() {
    const [value,setValue]=useState(" ")
    const  RenderCount=useRef(0)
    RenderCount.current+=1
  return (
    <div style={{padding:"20px"}}>
        <h2>Component Render Counter</h2>
        <div>
        <input type='text'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        style={{padding:"5px",marginLeft:"5px"}}
        />
    </div>
    <p>Component da render:{RenderCount.current}</p>
    </div>
  )
}
