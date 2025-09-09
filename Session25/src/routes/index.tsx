import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

const routers=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
   {
    path:"/contact",
    element:<Contact/>
  },
])
export default routers