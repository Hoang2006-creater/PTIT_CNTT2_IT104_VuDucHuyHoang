import Login from "../component/Login"
import Account from "../component/Account"
import PrivateRouter from "../component/PrivateRouter"
import { Navigate, Route, Routes } from "react-router-dom"
export default function Index5() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  )
}
