
import { Component } from "react";

export default class Toolbar extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
        <button style={{ padding: "8px 16px", background: "#1890ff", color: "white", border: "none", borderRadius: "4px" }}>
          Thêm mới sinh viên
        </button>
        <div style={{ display: "flex", gap: "10px" }}>
          <select>
            <option>Sắp xếp theo tuổi</option>
            <option>Tăng dần</option>
            <option>Giảm dần</option>
          </select>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
    );
  }
}
