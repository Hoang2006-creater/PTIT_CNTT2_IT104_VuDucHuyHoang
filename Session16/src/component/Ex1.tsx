import { Component } from "react";

export default class Ex1 extends Component {

  subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

  render() {
    return (
      <div
        style={{
          background: "#222",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
          margin: "20px auto",
        }}
      >
        <h2>Danh sách môn học</h2>
        {this.subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              background: "#e0f7fa",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "10px",
              color: "black",
              fontWeight: "500",
            }}
          >
            {subject}
          </div>
        ))}
      </div>
    );
  }
}
