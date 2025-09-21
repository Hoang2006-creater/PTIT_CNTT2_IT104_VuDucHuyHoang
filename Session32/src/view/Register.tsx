import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/Login";

interface Props {
  onSuccess: () => void;
}

export default function Register({ onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(email, password));
    onSuccess(); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid #ddd", padding: "20px", width: "300px", margin: "auto" }}
      >
        <h3>Đăng ký</h3>
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
          Đăng ký
        </button>
      </form>
      <p>Form đăng ký</p>
    </div>
  );
}
