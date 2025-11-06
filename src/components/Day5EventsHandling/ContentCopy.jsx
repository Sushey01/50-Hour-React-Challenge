import React from 'react'

const ContentCopy = () => {
    const handleCopy = ()=>{
        console.log("Dont copy my content")
    }
  return (
    <div>
        <button onClick={handleCopy}>okay</button>
      <h1 onClick={handleCopy}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur quia, quibusdam fugit eaque, placeat soluta ipsam eos in velit commodi. Ea nam aut, repellat aperiam asperiores sapiente! Explicabo, a.</h1>
    </div>
  )
}

export default ContentCopy
