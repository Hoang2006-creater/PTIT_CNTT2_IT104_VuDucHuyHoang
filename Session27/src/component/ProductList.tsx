import { Link } from "react-router-dom"
import { products } from "../data/List2"
export default function ProductList() {
  return (
    <div>
        <h1 style={{textAlign:"center",background:"blue",color:"white"}}>
            Trang chi tiet san pham
        </h1>
        <h2 style={{margin:"20px 0"}}>
            Danh sach san pham
        </h2>
        <div style={{display:"flex",gap:"20px"}}>
        {products.map((p)=>(
            <div key={p.id} style={{border:"1px solid #ddd",padding:"15px", width:"200px"}}>
                <h3>{p.name}</h3>
                <p>Gia:{p.price}</p>
                <Link to={`/products/${p.id}`}>Xem chi tiet</Link>
            </div>
        ))}
        </div>
    </div>
  )
}
