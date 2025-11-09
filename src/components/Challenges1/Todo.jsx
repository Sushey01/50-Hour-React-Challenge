import React, { useState } from 'react'
import "./Todo.css"

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")


    const handleSubmit = (e)=> {
      e.preventDefault();
      setTodos([...todos, input]);
    };
  return (
    <div className='userInput'>
      <h1>Type your todo here:</h1>
      <input 
      type="text"
      value={input}
      className='border p-2 rounded-xl'
      onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handleSubmit} type='button' className='button'>Submit</button>
      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
