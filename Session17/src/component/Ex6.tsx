import { useState, type ChangeEvent} from "react"

export default function Ex6() {
const [text,setText]=useState("")
const handleChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setText(e.target.value)
}
const charCount=text.length
  return (
    <div>
        <textarea value={text} onChange={handleChange}></textarea>
        <p>So ky tu:{charCount}</p>
    </div>
  )
}
