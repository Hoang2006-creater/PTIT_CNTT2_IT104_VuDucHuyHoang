import NotFound from "./Component/NotFound"
import HomePage from "./Component/HomePage"
import CustomLink from "./Component/CustomLink"
import { Route, Routes } from "react-router-dom"
export default function App7() {
  return (
    <div>
        <nav>
    <CustomLink/>
        </nav>
        <Routes>
            <Route path="/home-page" element={<HomePage/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}
