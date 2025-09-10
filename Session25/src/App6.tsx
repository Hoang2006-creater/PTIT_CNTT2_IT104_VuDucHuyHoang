import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Detail from "./Component/Detail";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}