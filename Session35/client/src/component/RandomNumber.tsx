
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/randomstore";
import { generateRandomList} from "../slice/randomSlice";

export default function RandomNumber() {
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Danh sách số nguyên ngẫu nhiên</h1>
      <button onClick={() => dispatch(generateRandomList(10))}>
        Tạo danh sách mới
      </button>
      <div style={{ marginTop: "20px" }}>
        {numbers.length > 0 ? (
          <ul>
            {numbers.map((num, idx) => (
              <li key={idx}>{num}</li>
            ))}
          </ul>
        ) : (
          <p>Danh sách trống</p>
        )}
      </div>
    </div>
  );
}
