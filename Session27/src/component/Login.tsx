import { useState } from "react";
import { Link} from "react-router-dom";
type User={
    email:string
    password:string
}
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const hadleLogin=()=>{
        const users=JSON.parse(localStorage.getItem("users")||"[]")
        const user=users.find((u:User)=>u.email&&u.password===password)
        if(!email||!password){
            alert("Email va mat khau khong duoc de trong")
        }
        if(user){
            alert("Dang nhap thanh cong")
        }else{
            alert("Email hay password khong dung")
        }

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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login account</h2>
        
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Your email</label>
          <input 
            type="email" 
            placeholder="name@company.com" 
            onChange={(e)=>setEmail(e.target.value)}
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

        <button onClick={hadleLogin}
          style={{ 
            width: "100%", 
            padding: "10px", 
            backgroundColor: "#2563eb", 
            color: "#fff", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer" 
          }}
        >
          Login an account
        </button>

        <p style={{ marginTop: "15px", textAlign: "center", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/register" style={{font:"bold",color: "#2563eb"}}>register here</Link>
        </p>
      </div>
    </div>
  );
}

