import React from "react";
import Cart from "./Cart";

export default function Main() {
  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        padding: "20px",
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <Cart key={i} />
      ))}
    </div>
  );
}
