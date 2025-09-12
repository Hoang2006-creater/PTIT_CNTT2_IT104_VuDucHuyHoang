import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate=useNavigate()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          color: "#1f2937", 
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "#4b5563",
          marginTop: "8px",
        }}
      >
        Not Found
      </p>
      <div style={{display:"flex",gap:"20px"}}>
        <button onClick={()=>navigate("/")}> Quay lai trang chu</button>
        <button onClick={()=>navigate(-1)}>Quay lai</button>
      </div>
    </div>
  );
}
