import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>Name is: {props.name}</h2>
      <p>Age is: {props.age}</p>
    </div>
  )
}

export default Person
