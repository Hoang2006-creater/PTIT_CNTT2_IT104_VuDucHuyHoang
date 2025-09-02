import React, { useState } from "react";

export default function Ex4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Trường này là bắt buộc";
    }

    if (!email.trim()) {
      newErrors.email = "Trường này là bắt buộc";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Email không hợp lệ";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div
      style={{
        width: "320px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center" }}> Đăng ký thông tin</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Họ tên</label>
          <input
            type="text"
            placeholder="Nhập họ tên..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #666",
            }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #666",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}> {errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
