import { useReducer } from "react"

type Action ={type:"Increase"}
const reducer=(state:number,action:Action):number=>{
    switch(action.type){
        case "Increase":
            return state+1
        default:
            return state
    }
}
export default function Increase() {
    const [count,dispatch]=useReducer(reducer,0)
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>dispatch({type:"Increase"})}>Increase</button>
    </div>
  )
}
