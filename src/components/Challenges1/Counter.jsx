import React, { useState } from 'react'
import "../../styles.css"

const Counter = () => {
    const [count, setCount] = useState(0)


    const increment = () =>setCount(count+1)
    const decrement = () =>setCount(count-1)
    
  return (
    <div className='container'>
      <h1 className='number'>Counter:{count}</h1>
      <div className='button-container'>
        <button onClick={increment} className='button-left'>+</button>
        <button onClick={decrement} className='button-right'>-</button>
      </div>
    </div>
  )
}

export default Counter
