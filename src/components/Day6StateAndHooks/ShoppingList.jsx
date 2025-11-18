import React, { useState } from 'react'

const ShoppingList = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")


  function handleChange(e){
    const {name, quantity} = e.target
    setItems(prev=>({
      ...prev,
     
    }))
  }

  return (
    <div>
      <form>
        <label>
          Item name:
          <input
          type='text'
          value={name}
          onChange={(e)=>{handleChange(e.target.value)}}
          />
        </label>
        <label>
          Quantity:
          <input 
          type='number'
          value={quantity}
          onChange={(e)=>{handleChange(e.target.value)}}
          />

        </label>
      </form>
    </div>
  )
}

export default ShoppingList
