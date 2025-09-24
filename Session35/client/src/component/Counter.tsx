import { decrease, increase, reset } from "../slice/counterSlice";
import { useAppDispatch, useAppSelector } from "../hook/useCustomRedux";

export default function Counter() {
    const {value}= useAppSelector((state)=>state.counter)
     const dispatch =useAppDispatch()
    //Truyen hanh dong tu component len reducer de xu ly 
    const handleIncrease =()=>{
       dispatch(increase())
    }
    const handleDecrease=()=>{
      dispatch(decrease())
    }
    const handleReset=()=>{
      dispatch(reset())
    }
  return (
    <div>
        <h2>Counter:{value}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        </div>
  )
}
