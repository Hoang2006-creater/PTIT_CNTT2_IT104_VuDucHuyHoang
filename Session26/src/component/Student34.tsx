import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function Student3() {
    const[searchParams,setSearchParams]=useSearchParams()
    const [input,setInput]=useState("")
    const handleSearch=()=>{
        setSearchParams({studentName:input})
    }
  return (
    <div>
        <input type="text"
        placeholder="Nhap tu khoa tim kiem"
        onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSearch}> Tim kiem </button>
        <p>ten hoc sinh la {searchParams.get("studentName")}</p>
    </div>
  )
}
