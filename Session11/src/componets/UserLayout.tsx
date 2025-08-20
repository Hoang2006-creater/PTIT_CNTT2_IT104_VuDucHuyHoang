import React from "react";
import Header from "./FiveComponent/Header";
import Navbar from "./FiveComponent/Navbar";
import Menu from "./FiveComponent/Menu";
import Article from "./FiveComponent/Article";
import Main from "./FiveComponent/Main";
export default function UserLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  );
}
