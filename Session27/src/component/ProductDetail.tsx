import { useParams } from "react-router-dom"
import { products } from "../data/List2"

export default function ProductDetail() {
    const {id}=useParams()
    const product =products.find((p)=>p.id===parseInt(id!))
  return (
    <div>
        <h1>Chi tiet san pham</h1>
        <h2>{product?.name}</h2>
        <p>Gia:{product?.price}</p>
        <p>Mo ta chi tiet{product?.description}</p>
    </div>
  )
}
