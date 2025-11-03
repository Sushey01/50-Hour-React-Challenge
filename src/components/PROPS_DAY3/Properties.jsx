import React from 'react'
import Mario from "../../assets/images/mario.png"

const Properties = () => {
  return (
    <div>
      <User 
      img={Mario}
      kera="Shekhar" age={20} isMarried={false} hobbies={["coding", "sleeping", "eating"]}/>
    </div>
  )
}

const User = (props)=>{
    // console.log(props);
    return <section>
        <p>My Photo: {props.Mario}</p>
        <h1>Name:{props.kera}</h1>
        <h2>Age:{props.age}</h2>
        <h3>IsMarried:{props.isMarried}</h3>
        <h3>Hobbies: {props.hobbies}</h3>
    </section>
}

export default Properties
