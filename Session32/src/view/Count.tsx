import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, type RootState } from "../store/Count";


export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <h2> Counter</h2>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())} style={{ marginRight: "10px" }}>
         Tăng
      </button>
      <button onClick={() => dispatch(decrement())}>
        Giảm
      </button>
    </div>
  );
}
