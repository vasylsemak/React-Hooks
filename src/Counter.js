import React, { useState } from 'react'
import './App.css'

const Counter = () => {
  const [num, setNum] = useState(0)
  const increment = () => setNum(num => num + 1)
  const decrement = () => setNum(num => num - 1)

  return (
    <div className="count-div">
      <button onClick={increment}>+</button>
      <h1 className="count-h1">{num}</h1>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
