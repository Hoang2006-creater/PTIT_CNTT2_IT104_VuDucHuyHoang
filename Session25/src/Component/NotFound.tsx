export default function NotFound() {
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
    </div>
  );
}
