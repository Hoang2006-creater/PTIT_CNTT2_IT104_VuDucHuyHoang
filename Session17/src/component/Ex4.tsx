import { useState } from "react"
export default function Ex4() {
    const [isVisible,setVisible]=useState(true)
    const toggleTitle=()=>{
        setVisible(!isVisible)
    }
  return (
    <div>
        <button onClick={toggleTitle}>
            {isVisible?"An tieu de":"Hien tieu de"}
        </button>
              {isVisible && <h2>Đây là tiêu đề</h2>}
    </div>
  )
}
