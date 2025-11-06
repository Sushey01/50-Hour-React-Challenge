import React, { useState } from 'react'

const FriendsStateArray = () => {
  const [friends, setFriends] = useState(["Kushal", "Sushil", "Sandip"])
  function addFriend(){
     setFriends([...friends, "Joseph"]) // Cloning the existing data to add the new friend
  }


  const removeFriend = () =>setFriends(friends.filter(f=>f!="Joseph"))
  return (
    <div>
      {friends.map((f)=>(
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addFriend}>Add new FRIEND</button>
      <button onClick={removeFriend}>Delete FRIEND</button>
    </div>
  )
}

export default FriendsStateArray
