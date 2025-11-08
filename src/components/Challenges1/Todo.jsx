import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState()
    const [input, setInput] = useState("")
  return (
    <div>
      <h1>Type your todo here:</h1>
      <input 
      type="text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
    </div>
  )
}

export default Todo
