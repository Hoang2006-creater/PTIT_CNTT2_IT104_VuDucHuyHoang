import  { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToTarget = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
         Cuộn tới nội dung
        </h1>
        <button
          onClick={scrollToTarget}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "#2563eb",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "40px 20px",
          textAlign: "center",
          minHeight: "800px",
          color: "#374151",
        }}
      >
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>

      <div
        ref={sectionRef}
        style={{
          height: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fde68a",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
         Đây là phần nội dung mục tiêu
      </div>
    </div>
  );
}
