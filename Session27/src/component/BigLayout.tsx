// src/layouts/BlogLayout.jsx
import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "200px",
          background: "#f4f4f4",
          padding: "20px",
          borderRight: "1px solid #ddd"
        }}
      >
        <h2>My Blog</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
