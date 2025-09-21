import { useSelector } from "react-redux";
import type { RootState } from "../store/ListUser";

export default function ListUser() {
  const users = useSelector((state: RootState) => state.users);

  return (
    <div style={{ padding: "16px" }}>
      <h2>Danh sách User</h2>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.userName}</td>
              <td>{u.gender}</td>
              <td>{u.dateBirth}</td>
              <td>{u.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
