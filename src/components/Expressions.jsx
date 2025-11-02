import React from 'react'

const Expressions = () => {
    const myInfo = "I am a gorkhali."
    const multiplication = (a, b) => a*b;
    const specialClass = "new ninja technique haha"
  return (
    <div>
      <p>JSX expressions can be used to embed JavaScript expressions within JSX.</p>
      <p>For example, you can perform calculations like 2 + 2 = {2 + 2}.</p>
      <p>{myInfo}</p>
      <p>Multiplication of 5 & 5 = {multiplication(5, 5)}</p>
      <p>My friends List: {["Kushal", "Sushil", "Sandip", "Joseph"]}</p>
      <p className={specialClass}>This is a special class damnnnn !! Bropooo</p>
    </div>
  )
}

export default Expressions
