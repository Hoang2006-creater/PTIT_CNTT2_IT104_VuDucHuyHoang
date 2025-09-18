import { Link, Route, Routes } from "react-router-dom"
import ManagerPost from "./component/ManagerPost";
function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Trang chủ</h1>
      <p>Chào mừng bạn đến với ứng dụng quản lý bài viết</p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <nav className="flex gap-4 bg-gray-100 p-4 shadow">
        <Link to="/" className="hover:underline">Trang chủ</Link>
        <Link to="/list-post" className="hover:underline">Danh sách bài viết</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-post" element={<ManagerPost />} />
      </Routes>
    </div>
  );
}

