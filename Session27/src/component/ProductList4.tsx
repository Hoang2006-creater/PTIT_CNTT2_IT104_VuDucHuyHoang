import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/List2";

export default function ProductList4() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || ""; 

  const [keyword, setKeyword] = useState(query);

  useEffect(() => {
    setKeyword(query);
  }, [query]);

  const handleSearch = () => {
    if (keyword) {
      setSearchParams({ search: keyword }); 
    } else {
      setSearchParams({}); 
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sản phẩm</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa..."
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "200px",
            }}
          >
            <h3>{p.name}</h3>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
