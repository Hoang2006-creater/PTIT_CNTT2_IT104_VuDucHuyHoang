import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/useStore";
import { toggleFavorite } from "../slice/useSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function UserList() {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3>List Favorites User</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "10px",
            borderBottom: "1px solid #eee",
          }}
        >
          <p>UserName: {user.name}</p>
          <p>
            Favorites:{" "}
            <span
              style={{ cursor: "pointer", color: user.favorite ? "red" : "gray" }}
              onClick={() => dispatch(toggleFavorite(user.id))}
            >
              {user.favorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
