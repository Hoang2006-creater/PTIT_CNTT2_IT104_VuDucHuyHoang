import {  Route, Routes } from "react-router-dom";
import Posts from "./component/Posts";
import PostDetail from "./component/PostDetail";
import BlogLayout from "./component/BigLayout";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<BlogLayout/>}/>
      <Route path="/posts" element={<Posts/>}/>
         <Route path="/postdetail" element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
