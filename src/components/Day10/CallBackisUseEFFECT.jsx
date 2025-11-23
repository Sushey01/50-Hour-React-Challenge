import React, { useEffect, useState } from 'react'

const CallBackisUseEFFECT = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData() {
           const response = await fetch(
             "https://jsonplaceholder.typicode.com/posts"
           );
          const data = await response.json()
          if (data && data.length) setData(data)
        }
    getData();
    }, [])

  return (
    <div>
      <ul>
        {data.map((post) => (
          <section key={id}>
            <li>{post.title}</li>
            <li>{post.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
}

export default CallBackisUseEFFECT
