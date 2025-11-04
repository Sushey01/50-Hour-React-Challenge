import React from 'react'

// let temp = 30;

// Its my attempt and I did it correctly 

// const Weather = ({isTemperature}) => {
//   if(isTemperature<15){
//     return <h1>It's cold outside!</h1>
//   } else if(isTemperature<=25){
//     return <h1>It's nice outside!</h1>
//   }else (isTemperature>25)
//     return <h1>It's hot outside!</h1>
  
// }

const Weather = () =>{
    let temp = 10;

    if (temp<15){
        return <h1>It's cold outside.</h1>
    } else if (temp>=15 && temp<=25) {
        return <h2>It's nice outside.</h2>
    } else if (temp>25) {
        return <h2>It's hot outside.</h2>
    }
}




export default Weather
