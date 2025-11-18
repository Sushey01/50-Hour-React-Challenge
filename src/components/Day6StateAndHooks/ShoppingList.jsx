import React, { useState } from 'react'

const ShoppingList = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")


  function handleChange(e){
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {name, quantity};

    setItems((prevItems)=>[...prevItems, newItem]);
    setName("");
    setQuantity("");
  }

  return (
    <div>
      <form  onSubmit={handleChange}>
        <label>
          Item name:
          <input
          type='text'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input 
          type='number'
          value={quantity}
          onChange={(e)=>setQuantity(e.target.value)}
          />

        </label>
        <button type='submit'>Add Item</button>
      </form>


      <ul>
        {items.map((item, index)=>(
          <li key={index}>
            {item.name} -Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
