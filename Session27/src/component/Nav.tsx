import { NavLink } from "react-router-dom"
import "../index.css" 
export default function Nav() {
  return (
    <nav className="nav">
        <NavLink to="/" end className={({isActive})=>(isActive?"active":"")}>Home</NavLink>
        <NavLink to="/product" className={({isActive})=>(isActive)?"active":""}>About</NavLink>
        <NavLink to="/detal" className={({isActive})=>(isActive)?"active":""}>Detail</NavLink>
    </nav>
  )
}
