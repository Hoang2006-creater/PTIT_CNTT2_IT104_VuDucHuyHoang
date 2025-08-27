import { useState, type ChangeEvent } from "react"
export default function Ex7() {
    const [city,setCity]=useState(" ")
    const handleChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        setCity(e.target.value)
    }
  return (
    <div>
        <h2>Thanh pho:{city}</h2>
        <select value={city} onChange={handleChange}>
            <option value="">Chon thanh pho</option>
            <option value="Ha Noi">Ha Noi</option>
            <option value="Da Nang">Da Nang</option>
            <option value="TP Ho Chi Minh">Ho Chi Minh</option>
            <option value="Thanh Hoa">Thanh Hoa</option>
        </select>
    </div>
  )
}
