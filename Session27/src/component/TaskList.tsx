import { tasks } from "../data/DataTask"
import { Link } from "react-router-dom"
export default function TaskList() {
  return (
    <div>
        <h1>Danh sach cong viec</h1>
        <div style={{display:"flex",flexDirection:"column",padding:"20px"}}>
        {tasks.map((t)=>(
        <div key={t.id} style={{border:"1px solid"}}>
            <h2>{t.title}</h2>
            <p>{t.description}</p>
            <Link to={`/tasks/${t.id}`}>Xem chi tiet</Link>
        </div>
        ))}
        </div>
    </div>
  )
}
