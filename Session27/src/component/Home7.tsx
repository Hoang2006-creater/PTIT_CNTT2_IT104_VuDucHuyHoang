import { useNavigate } from "react-router-dom"

export default function Home7() {
    const navigate=useNavigate()
  return (
    <div>
        <h1>Day la trang chu</h1>
        <p>Day la trang chu</p>
        <button onClick={()=>navigate("/about")}>About</button>
    </div>
  )
}
