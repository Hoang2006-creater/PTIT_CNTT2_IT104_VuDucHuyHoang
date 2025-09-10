export default function Register() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      <div style={{ 
        border: "1px solid #ddd", 
        borderRadius: "8px", 
        padding: "30px", 
        width: "350px", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)" 
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create account</h2>
        
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Your email</label>
          <input 
            type="email" 
            placeholder="name@company.com" 
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} 
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input 
            type="password" 
            placeholder="********" 
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} 
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Confirm password</label>
          <input 
            type="password" 
            placeholder="********" 
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }} 
          />
        </div>

        <button 
          style={{ 
            width: "100%", 
            padding: "10px", 
            backgroundColor: "#2563eb", 
            color: "#fff", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer" 
          }}
        >
          Create account
        </button>

        <p style={{ marginTop: "15px", textAlign: "center", fontSize: "14px" }}>
          Already have an account?{" "}
          <a href="#" style={{ color: "#2563eb", fontWeight: "bold" }}>Login here</a>
        </p>
      </div>
    </div>
  );
}

