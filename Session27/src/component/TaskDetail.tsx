import { useNavigate, useParams } from "react-router-dom"
import { tasks } from "../data/DataTask"
export default function TaskDetail() {
    const {id}=useParams()
    const task = tasks.find((t)=>t.id===parseInt(id!))
    const navigate=useNavigate()
  return (
    <div>
        <h1>{task?.title}</h1>
        <p>{task?.description}</p>
        <button onClick={()=>navigate(-1)}>Quay lai</button>
    </div>
  )
}
