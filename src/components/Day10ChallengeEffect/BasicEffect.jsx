import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(()=>{
        console.log("Hello Shekhar for only one time")
    }, [])
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default BasicEffect
