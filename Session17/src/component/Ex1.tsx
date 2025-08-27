import { useState } from 'react'

export default function Ex1() {
    const [name]=useState("Hoang")
  return (
    <div>
        <h2>Ho va Ten {name}</h2></div>
  )
}
