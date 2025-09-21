import { useSelector } from "react-redux";
import type { RootState } from "../store/Login";
import { useState, useEffect } from "react";

export default function Login() {
  const user = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user.email) setEmail(user.email);
    if (user.password) setPassword(user.password);
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng nhập với email: ${email}, password: ${password}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid #ddd", padding: "20px", width: "300px", margin: "auto" }}
      >
        <h3>Đăng nhập</h3>
        <input
          type="email"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
          required
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
          required
        />
        <button type="submit" style={{ width: "100%", padding: "8px", background: "#2563eb", color: "#fff" }}>
          Đăng nhập
        </button>
      </form>
      <p>Form đăng nhập</p>
    </div>
  );
}
