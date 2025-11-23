import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData(){


           const response = await fetch(
             "https://jsonplaceholder.typicode.com/posts"
           );
           const data = await response.json();
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default FetchDataEffect
