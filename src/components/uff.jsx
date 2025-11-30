import React, { useState } from 'react'

const uff = () => {
    const [click, setClick] = useState(0)
  return (
    <div>
      <button onClick={()=>setClick(click + 1)}>
        Just Click me!
      </button>

    </div>
  )
}

export default uff
