import React from 'react'

const Events = () => {
   const handleClick = ()=>console.log(Math.round(Math.random))

  return (
    <div>
      <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default Events
