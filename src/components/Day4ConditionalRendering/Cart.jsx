import React from 'react'

const Cart = () => {
    const items = ["Wireless", "speaker","Hoodie", "Boodie"]
  return (
    <div>
      <h1>CART</h1>
      {items.length>0 && <h2>You have {items.length} items in your cart.</h2>}

      <ul>
        <h2>Products</h2>
        {items.map((item)=>(
            <li key={Math.random()}>
                {item}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
