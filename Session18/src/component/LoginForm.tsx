import React, { useState,useCallback } from "react";

export default function LoginForm() {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))
    }
    //Callback
    const handleSubmit=useCallback(
        (e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            console.log("Gia tri nhap vao",formData);
        },[formData]
    )
  return (
    <form onSubmit={handleSubmit} >
        <input 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}/>
         <input 
        type="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
  )
}
