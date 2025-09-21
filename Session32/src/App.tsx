import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store/Login8";
import Login from "./view/Login8";

export default function App() {
  const user = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log("Thông tin đăng nhập:", user);
  }, [user]);

  return (
    <div>
      <Login />
      {user.isLoggedIn && <h3>Xin chào, {user.email}</h3>}
    </div>
  );
}
