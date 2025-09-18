import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  date: string;
  status: string; 
};

export default function ManagerPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [search, setSearch] = useState("");
  const [confirmAction, setConfirmAction] = useState<{
    type: "block" | "delete" | "reset" | null;
    post?: Post;
  }>({ type: null });

  const [newPost, setNewPost] = useState<Omit<Post, "id">>({
    title: "",
    image: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    status: "Chan",
  });
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/post");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const validatePost = (post: Omit<Post, "id">, id?: number) => {
    if (!post.title || !post.image || !post.content) {
      alert("Tên bài viết, hình ảnh và nội dung không được để trống");
      return false;
    }
    const isDuplicate = posts.some(
      (p) => p.title === post.title && p.id !== id
    );
    if (isDuplicate) {
      alert("Tên bài viết đã tồn tại");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (editingPost) {
      if (!validatePost(newPost, editingPost.id)) return;
      await axios.patch(`http://localhost:3000/post/${editingPost.id}`, newPost);
    } else {
      if (!validatePost(newPost)) return;
      const res = await axios.post("http://localhost:3000/post", newPost);
      setPosts([...posts, res.data]);
    }
    setShowForm(false);
    setEditingPost(null);
    setNewPost({
      title: "",
      image: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      status: "Chan",
    });
    fetchPosts();
  };

  const handleBlockConfirm = async () => {
    if (!confirmAction.post) return;
    const newStatus =
      confirmAction.post.status === "Da xuat ban" ? "Chan" : "Da xuat ban";
    await axios.patch(`http://localhost:3000/post/${confirmAction.post.id}`, {
      status: newStatus,
    });
    setConfirmAction({ type: null });
    fetchPosts();
  };
  const handleDeleteConfirm = async () => {
    if (!confirmAction.post) return;
    await axios.delete(`http://localhost:3000/post/${confirmAction.post.id}`);
    setConfirmAction({ type: null });
    fetchPosts();
  };
  const handleSearch = async () => {
    if (!search) {
      fetchPosts();
    } else {
      const res = await axios.get(
        `http://localhost:3000/post?title_like=${search}`
      );
      setPosts(res.data);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-3">
          <input
            className="shadow-md p-1 pr-10"
            type="search"
            placeholder="Nhập từ khóa tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-400 px-3 py-1 text-white rounded"
          >
            Tìm
          </button>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingPost(null);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Thêm mới bài viết
        </button>
      </div>
      <table className="w-full border border-gray-200 mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-3 py-2">STT</th>
            <th className="border px-3 py-2">Tiêu đề</th>
            <th className="border px-3 py-2">Hình ảnh</th>
            <th className="border px-3 py-2">Ngày viết</th>
            <th className="border px-3 py-2">Trạng thái</th>
            <th className="border px-3 py-2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center p-4 text-gray-500">
                Không có kết quả tìm kiếm
              </td>
            </tr>
          ) : (
            posts.map((post, index) => (
              <tr key={post.id} className="text-center">
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">{post.title}</td>
                <td className="border px-3 py-2">
                  <img
                    src={post.image}
                    alt=""
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="border px-3 py-2">{post.date}</td>
                <td className="border px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      post.status === "Da xuat ban"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    className="bg-orange-300 px-2 py-1 rounded"
                    onClick={() =>
                      setConfirmAction({ type: "block", post: post })
                    }
                  >
                    {post.status === "Da xuat ban" ? "Chặn" : "Xuất bản"}
                  </button>
                  <button
                    className="bg-yellow-300 px-2 py-1 rounded"
                    onClick={() => {
                      setShowForm(true);
                      setEditingPost(post);
                      setNewPost({
                        title: post.title,
                        image: post.image,
                        content: post.content,
                        date: post.date,
                        status: post.status,
                      });
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    className="bg-red-300 px-2 py-1 rounded"
                    onClick={() =>
                      setConfirmAction({ type: "delete", post: post })
                    }
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {editingPost ? "Cập nhật bài viết" : "Thêm mới bài viết"}
              </h3>
              <button onClick={() => setShowForm(false)}>✖</button>
            </div>
            <label className="block mb-1 font-semibold">Tên bài viết</label>
            <input
              type="text"
              className="w-full p-2 mb-3 border rounded"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <label className="block mb-1 font-semibold">Hình ảnh</label>
            <input
              type="text"
              className="w-full p-2 mb-3 border rounded"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            />
            <label className="block mb-1 font-semibold">Nội dung</label>
            <textarea
              className="w-full p-2 mb-3 border rounded"
              rows={5}
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            />

            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setConfirmAction({ type: "reset" })}
              >
                Làm mới
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                {editingPost ? "Cập nhật" : "Xuất bản"}
              </button>
            </div>
          </div>
        </div>
      )}
      {confirmAction.type && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Xác nhận</h2>
            <p className="mb-6">
              {confirmAction.type === "block" &&
                `Bạn có chắc muốn ${
                  confirmAction.post?.status === "Da xuat ban"
                    ? "chặn"
                    : "xuất bản"
                } bài viết "${confirmAction.post?.title}"?`}
              {confirmAction.type === "delete" &&
                `Bạn có chắc muốn xóa bài viết "${confirmAction.post?.title}"?`}
              {confirmAction.type === "reset" &&
                "Bạn có chắc muốn xóa hết dữ liệu trong form?"}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmAction({ type: null })}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  if (confirmAction.type === "block") handleBlockConfirm();
                  if (confirmAction.type === "delete") handleDeleteConfirm();
                  if (confirmAction.type === "reset") {
                    setNewPost({
                      title: "",
                      image: "",
                      content: "",
                      date: new Date().toISOString().split("T")[0],
                      status: "Chan",
                    });
                    setConfirmAction({ type: null });
                  }
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
