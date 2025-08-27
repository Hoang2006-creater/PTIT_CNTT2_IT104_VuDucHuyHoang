import { useState, type ChangeEvent } from "react"

export default function Ex5() {
    const [form,setForm]=useState("")
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setForm(e.target.value)
    }
  return (
    <div>
        <input type="text" placeholder="Nhap noi dung" value={form} onChange={handleChange} />
        <p>Gia tri ban nhap:{form}</p>
    </div>
  )
}
