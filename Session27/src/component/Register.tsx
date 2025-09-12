import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const navigate=useNavigate()
    const handleRegister =()=>{
        if(!email||!password||!confirm){
            alert("Khong duoc de trong")
            return
        }
        if(password!==confirm){
            alert("Mat khau khong chinh sac")
            return
        }
        const users=JSON.parse(localStorage.getItem("users")||"[]")
        const exists=users.find((u: { email: string; })=>u.email===email)
        if(exists){
            alert("email da ton tai")
            return
        }
        users.push({email,password})
        localStorage.setItem("users",JSON.stringify(users))
        alert("Dang ki thanh cong")
        navigate("/")
    }
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      <div style={{ 
        border: "1px solid #ddd", 
        borderRadius: "8px", 
        padding: "30px", 
        width: "350px", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)" 
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create account</h2>
        
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Your email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="name@company.com" 
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} 
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input 
            type="password" 
            placeholder="********"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} 
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Confirm password</label>
          <input 
            type="password" 
            placeholder="********" 
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} 
          />
        </div>

        <button 
          style={{ 
            width: "100%", 
            padding: "10px", 
            backgroundColor: "#2563eb", 
            color: "#fff", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer" 
          }}
          onClick={handleRegister}
        >
          Create account
        </button>

        <p style={{ marginTop: "15px", textAlign: "center", fontSize: "14px" }}>
          Already have an account?{" "}
         <Link to="/" style={{ color: "#2563eb", fontWeight: "bold"}}>Login here</Link>
         </p>
      </div>
    </div>
  );
}

