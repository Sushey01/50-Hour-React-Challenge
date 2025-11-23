import React, { useEffect, useState } from 'react'
import Counter from '../Challenges1/Counter'

const CounterEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const counter = setCount(count+1)
// document.title()
    }, [count])



  return (
    <div>
        <h1>Increment the count</h1>
      <button>
Click
      </button>
    </div>
  )
}

export default CounterEffect
