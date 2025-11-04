import React from 'react'

const Greeting = (timeOfDay={morning}) => {
  return (
    <div>
      timeOfDay? return <h1>Good morning</h1>: <h1>Good afternoon</h1>
    </div>
  )
}

export default Greeting
