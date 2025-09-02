import  { useState, useEffect } from "react";

export default function KeyListener() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setLastKey(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ fontSize: "80px", color: "#333" }}>
        {lastKey || "Nhấn một phím bất kỳ..."}
      </h1>
    </div>
  );
}
