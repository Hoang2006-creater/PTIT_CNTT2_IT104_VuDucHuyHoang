import { useParams } from "react-router-dom";
import { posts } from "../data/Post";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2 style={{ color: "red" }}>Bài viết không tồn tại.</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}
