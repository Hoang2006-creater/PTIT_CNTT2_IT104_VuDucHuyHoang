import { useParams } from "react-router-dom"

export default function Student() {
    const {name}=useParams()
  return (
    <div>Ten hoc sinh la {name}</div>
  )
}
