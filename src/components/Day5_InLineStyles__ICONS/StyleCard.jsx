import React from 'react'
// import {BadgeDollarSign} from 'lucide-react/dist/esm/icons/badge-dollar-sign.js';

const StyleCard = () => {
    let cardStyle = {backgroundColor:"pink", transition:"0.3s"}
    let textStyle = {color:"green"}
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        color: "darkblue",
      }}
    >
      <p>
        {/* <BadgeDollarSign /> */}
      </p>
      <p style={textStyle}>Styling Challenges</p>
      <p style={cardStyle}>
        Let's tackle some styling challenges using inline styles!
      </p>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      </p>
    </div>
  );
}

export default StyleCard
