import React from 'react'

const Mapping = () => {

    const usersInfo = [
        {username: "Shekhar", email: "shekhar@example.com", location: "Nepal"},
        {username: "Lakpa", email: "lakpa@example.com", location: "Nepal"},
        {username: "Raju", email: "raju@example.com", location: "Nepal"}
    ]
  return (
    <div>
      {/* {usersInfo.map((user)=>(
        <ul key={Math.random()}>
            <li>{user.username}</li>
            <li>{user.email}</li>                
            <li>{user.location}</li>                
        </ul>
      )
       
      )} */}


      {/* // Using destructuring method... */}
   {usersInfo.map(({username, email, location})=>(
    <ul key={Math.random()}>
        <li>{username}</li>
        <li>{email}</li>
        <li>{location}</li>
    </ul>
   ))}
    </div>
  )
}

export default Mapping
