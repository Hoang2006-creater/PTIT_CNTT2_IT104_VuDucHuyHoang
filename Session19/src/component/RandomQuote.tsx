import{ useState } from "react";

export default function RandomQuote() {
  const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
  ];

  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2> Random Quote</h2>
      <p style={{ minHeight: "50px", fontSize: "18px" }}>
        {quote || "Nhấn nút để lấy câu nói mới!"}
      </p>
      <button
        onClick={getRandomQuote}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}
