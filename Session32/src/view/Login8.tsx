// Login.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/Login8";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email)); 
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ border: "1px solid #ccc", padding: 20, width: 300, margin: "20px auto" }}
    >
      <h2>Đăng nhập</h2>
      <input
        type="email"
        placeholder="Nhập email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />
      <button type="submit" style={{ width: "100%", background: "blue", color: "white" }}>
        Đăng nhập
      </button>
    </form>
  );
}
