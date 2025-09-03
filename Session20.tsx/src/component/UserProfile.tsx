import {  useState } from "react"

export default function UserProfile() {
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [submitted,setSubmitted]=useState<boolean>(false)
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()
        setSubmitted(true)
    }
  return (
    <div style={{padding:"20px"}}>
        <h2>Nhap thong tin nguoi dung</h2>
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"300px"}}>
     <input
          type="text"
          placeholder="Nhập tên..."
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <input
          type="text"
          placeholder="Nhập email..."
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "8px", fontSize: "16px", cursor: "pointer" }}>
          Gửi
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p><b>Tên:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
        </div>
      )}
    
    </div>
  )
}
