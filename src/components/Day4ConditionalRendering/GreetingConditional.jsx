import React from 'react'

const GreetingConditional = (props) => {
  return (
    <div>
      {props.timeOfDay === "morning"? (<h1>Good Morning</h1>): (<h1>Good Afternoon</h1>)}
    </div>
  )
}

export default GreetingConditional;
