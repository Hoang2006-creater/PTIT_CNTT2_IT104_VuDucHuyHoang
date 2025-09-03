import React, { useEffect, useState } from "react"

export default function PageTitle() {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    if (name) {
      document.title = `Xin chào, ${name}!`
    } else {
      document.title = "Trang của bạn"
    }
  }, [name])

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Thay đổi tiêu đề trang</h2>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Nhập tên của bạn..."
      />
      <p>
        Tiêu đề trang hiện tại: <b>{name ? `Xin chào, ${name}!` : "Trang của bạn"}</b>
      </p>
    </div>
  )
}
