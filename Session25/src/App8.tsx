import { Route, Routes } from "react-router-dom"
import ListUser from "./Component/ListUser"
import UserDetail from "./Component/UserDetail"
export default function App8() {
  return (
    <Routes>
        <Route path="/" element={<ListUser/>}/>
        <Route path="user/:id" element={<UserDetail/>}/>
    </Routes>
  )
}
