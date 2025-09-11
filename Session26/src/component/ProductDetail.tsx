import { useParams } from "react-router-dom"

export default function ProductDetail() {
   const {id}=useParams()
    return (
    <div>ID nguoi dung {id}</div>
  )
}
