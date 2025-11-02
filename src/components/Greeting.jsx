import React from 'react'

const Greeting = () => {
    const greet = "Shekhar, HI!"
    const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1 className='text-center text-bold text-2xl border rounded-sm hover:bg-blue-500 text-white'>Namaste, Welcome to Nepal</h1>
      <p>Today's Date is: {currentDate}</p>
      <p>Hello, {greet}</p>
    </div>
  )
}

export default Greeting
