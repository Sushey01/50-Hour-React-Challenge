import React from 'react'

const ProductInfo = () => {

    const product = {
        name:"Laptop",
        price:1800,
        availability: "In Stock",
        
    }
    // const productName = "Laptop";
    // const price = 1200;
    // const availability = "In Stock";
  return (
    <div>
      <h1>New Product is {product.name}</h1>
      <p>Price is ${product.price}</p>
      <p>Availability is {product.availability}</p>
    </div>
  )
}

export default ProductInfo
