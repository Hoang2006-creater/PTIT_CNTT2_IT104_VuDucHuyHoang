import { useNavigate } from "react-router-dom"
import { useState } from "react"
export default function Login() {
    const navigate=useNavigate()
    const State={
        email:"admin@gmail.com",
        password:"123456",
        role:"admin"
    }
    const [form,setForm]=useState({email:"",password:"",role:""})
    const [error,setError]=useState("")
    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
         if(
        form.email===State.email&&
        form.password===State.password&&
        form.role===State.role
    ){
        localStorage.setItem("isAuthenticated","true")
        navigate("/account")
    }else{
        setError("Thong tin dang nhap khong chinh sac")
    }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Dang nhap</h2>
        <input type="email"
        name="email"
        placeholder="Nhap email"
        value={form.email}
        onChange={handleChange}
        />
        <input type="password"
        name="password"
        placeholder="Nhap mat khau"
        value={form.password}
        onChange={handleChange}
        />
        <select name="role"
        value={form.role}
        onChange={handleChange}>
        <option value="">--Chon quyen--</option>   
         <option value="admin">Admin</option>
         <option value="user">User</option>
        </select>
        <button type="submit">Dang nhap </button>
        {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
        </form>
    </div>
  )
}

