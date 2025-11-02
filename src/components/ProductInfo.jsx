import React from 'react'

const ProductInfo = () => {
    const productName = "Laptop";
    const price = 1200;
    const availability = "In Stock";
  return (
    <div>
      <h1>New Product is {productName}</h1>
      <p>Price is {price}</p>
      <p>Availability is {availability}</p>
    </div>
  )
}

export default ProductInfo
