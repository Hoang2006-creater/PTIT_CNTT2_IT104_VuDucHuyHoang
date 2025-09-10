import About from "../Component/About"
import Home from "../Component/Home"
import Contact from "../Component/Contact"
import Login from "../Component/Login"
import Register from "../Component/Register"
import { Route, Routes } from "react-router-dom"
import NotFound from "../Component/NotFound"
import HomePage from "../Component/HomePage"
export default function Index() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="*" element={<NotFound/>}></Route>
         <Route path="/home-page"element={<HomePage/>}></Route>
      </Routes>
    </div>
  )
}
