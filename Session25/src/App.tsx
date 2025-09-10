import { Link} from "react-router-dom"
import Index from "./routes"
function App() {
  return (
    <div>
      <nav style={{gap:"20px",display:"flex",}}> 
        <Link to="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/Notfound">Notfound</Link>
      </nav>
      <Index/>
      </div>
  )
}

export default App
