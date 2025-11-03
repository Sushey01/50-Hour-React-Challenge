import React from 'react'



const Product = (props) => {
  return (
    <div>
      <h2>Product's name: {props.name} </h2>
      <p>Product's price: ${props.price}</p>
    </div>
  )
}

export default Product
