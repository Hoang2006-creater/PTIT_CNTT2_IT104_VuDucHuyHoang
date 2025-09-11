import { Route, Routes } from "react-router-dom";
import ProductDetail from "../component/ProductDetail";
import Student from "../component/Student";
import Student3 from "../component/Student34";
export default function Index() {
  return (
    <Routes>
    <Route path="/product/:id" element={<ProductDetail/>}/>
    <Route path="/student/:name" element={<Student/>}/>
    <Route path="/student" element={<Student3/>}/>
    </Routes>
  )
}
