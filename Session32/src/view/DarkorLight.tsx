import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, type RootState } from "../store/DarkorLight";


export default function ThemeSwitcher() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{ padding: "16px" }}>
      <label>
        <input type="checkbox" checked={theme === "dark"} onChange={handleChange} />
        Dark Mode
      </label>
    </div>
  );
}
