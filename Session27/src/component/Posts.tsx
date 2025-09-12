import { Link } from "react-router-dom";
import { posts } from "../data/Post";

export default function Posts() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id} style={{ marginBottom: "15px" }}>
            <Link to={`/blog/posts/${p.id}`} style={{ fontWeight: "bold" }}>
              {p.title}
            </Link>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
