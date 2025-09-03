import  { useEffect, useState } from 'react'

export default function Timer() {
    const [count,setCount]=useState<number>(0)
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])
  return (
    <div>
        <h2>Timer</h2>
        <p>Thoi gian da troi qua {count} giay</p>
    </div>
  )
}
