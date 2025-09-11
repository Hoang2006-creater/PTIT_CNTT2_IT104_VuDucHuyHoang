import { useParams } from "react-router-dom"

export default function Team() {
    const {id}=useParams()
  return (
    <div> Chi tiet team{id}</div>
  )
}
