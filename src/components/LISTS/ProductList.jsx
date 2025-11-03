import React from 'react'

const ProductList = () => {
    const products =[
        {id:1, name:"Laptop", price:"$100000"},
        {id:2, name:"Mobile", price:"$200000"},
        {id:3, name:"Necklace", price:"$300000"},
        {id:4, name:"Scooter", price:"$500000"},
    ];
  return (
    <>
      {products.map(({ id, name, price }) => (
        <div key={id}>
          <p>What is the name of your product: {name}</p>
          <p>What is the price of your product: {price}</p>
        </div>
      ))}
    </>
  );
}

export default ProductList
