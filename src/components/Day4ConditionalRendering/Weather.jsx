import React from 'react'

// const temperature = 15;

const Weather = ({isTemperature}) => {
  if(isTemperature<15){
    return <h1>It's cold outside!</h1>
  } else if(isTemperature<=25){
    return <h1>It's nice outside!</h1>
  }else (isTemperature>25)
    return <h1>It's hot outside!</h1>
  
}

export default Weather
