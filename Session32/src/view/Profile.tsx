import { useSelector } from "react-redux"
import type { RootState } from "../store/Profile"


export default function Profile() {
    const user=useSelector((state:RootState)=>state.user)
  return (
     <div>
      <h2>Thong tin ca nhan</h2>
      <p><b>ID:</b> {user.id}</p>
      <p><b>UserName:</b> {user.userName}</p>
      <p><b>Gender:</b> {user.gender}</p>
      <p><b>Date of Birth:</b> {user.dateBirth}</p>
      <p><b>Address:</b> {user.address}</p>
    </div>
  );
}