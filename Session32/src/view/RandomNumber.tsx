import { useDispatch, useSelector } from "react-redux";
import { addRandomNumber, type RootState } from "../store/RandomNumber";
export default function RandomNumber() {
  const numbers = useSelector((state: RootState) => state.randomNumbers);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const randomNum: number = Math.floor(Math.random() * 100); 
    dispatch(addRandomNumber(randomNum));
  };

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <h2> Random Number Generator</h2>
      <button onClick={handleGenerate} style={{ marginBottom: "16px" }}>
        Generate Random Number
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {numbers.map((num: number, index: number) => (
          <li key={index}>👉 {num}</li>
        ))}
      </ul>
    </div>
  );
}
