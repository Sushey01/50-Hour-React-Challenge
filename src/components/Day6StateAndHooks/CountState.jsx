import React, { useState } from 'react'

const CountState = () => {
    const [count, setCount] = useState("Shekhar")
    function updateName (){
        setCount("Friday Session")
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateName} >update</button>
    </div>
  )
}

export default CountState
