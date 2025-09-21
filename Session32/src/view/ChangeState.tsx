import { useDispatch, useSelector } from "react-redux";
import { changeCompany, type RootState } from "../store/ChangState";

export default function ChangeState() {
  const company = useSelector((state: RootState) => state.company);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <p>Current company: <strong>{company}</strong></p>
      <button onClick={() => dispatch(changeCompany())}>
        Change state
      </button>
    </div>
  );
}
