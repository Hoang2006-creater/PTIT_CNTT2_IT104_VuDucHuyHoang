
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/ChangeMode";
import { toggleView } from "../slice/changeModeSlice";

const data = [1, 2, 3, 4];

export default function ChangeMode() {
  const mode = useSelector((state: RootState) => state.view.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => dispatch(toggleView())}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: mode === "grid" ? "repeat(4, 1fr)" : "1fr",
          gap: "10px",
        }}
      >
        {data.map((item) => (
          <div
            key={item}
            style={{
              background: "tomato",
              color: "#fff",
              textAlign: "center",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
