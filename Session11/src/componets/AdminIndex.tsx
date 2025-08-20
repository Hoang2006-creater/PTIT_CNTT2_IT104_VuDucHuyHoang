import React from "react";
import Footer from "./Fourcomponnet/Footer";
import Header from "./Fourcomponnet/Header";
import Main from "./Fourcomponnet/Main";
import Menu from "./Fourcomponnet/Menu";
export default function AdminIndex(){
    return(
        <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>
            <Header/>
                <div style={{display:"flex",flex:1}}>
                  <Menu/>
                    <Main/>
                </div>
                <Footer/>
        </div>
    )
}