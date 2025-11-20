import React from 'react'

const PopupContent = ({copied}) => {
  return (
    <section style={{position:"relative", height:"100px"}}>
      {copied && (
        <div style={{position:"absolute",bottom:"3rem"}}>Copied to clipboard!</div>
      )}
    </section>
  )
}

export default PopupContent
