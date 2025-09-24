import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slice/DarkorLightSlice";
import type { AppDispatch, RootState } from "../store/DarkorLight";


function DarkorLight() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: mode === "light" ? "#fff" : "#333",
        color: mode === "light" ? "#000" : "#fff",
      }}
    >
      <h1>{mode === "light" ? " Light" : "Dark"}</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Đổi chế độ
      </button>
    </div>
  );
}

export default DarkorLight;
