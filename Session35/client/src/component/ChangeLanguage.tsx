import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/ChangeLanguage";
import { toggleLanguage } from "../slice/languagueSlice";
const translations = {
  en: {
    greeting: "Rikkei academy",
    button: "Change language",
  },
  vi: {
    greeting: "Hoc vien Rikkei",
    button: "Đổi ngôn ngữ",
  },
};

export default function App() {
  const lang = useSelector((state: RootState) => state.language.current);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>{translations[lang].greeting}</h1>
      <button
        onClick={() => dispatch(toggleLanguage())}
        style={{
          padding: "10px 20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {translations[lang].button}
      </button>
    </div>
  );
}
