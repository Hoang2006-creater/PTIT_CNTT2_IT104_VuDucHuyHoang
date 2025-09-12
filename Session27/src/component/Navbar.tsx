import { Link } from "react-router-dom"
export default function Navbar() {
  return (
  <nav style={{gap:"20px", display:"flex"}}>
    <Link to="/">Home</Link>
    <Link to="/about">Contact</Link>
    <Link to="/contact">About</Link>
  </nav>
  )
}
