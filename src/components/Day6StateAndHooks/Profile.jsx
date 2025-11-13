import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
      name:"",
      age:"",
    })


    function handleChange(e){
      setProfile({
        ...profile,
        name:e.target.value
      })
    }
  return (
    <div>
    <h1>Name:
      <input
      type="text"
      value={profile.name}
      onChange={(e)=>{handleChange(e)}}
      />
      </h1> 
      <h2>Age:
        <input
        type='number'
        value={profile.age}
        onChange={(e)=>{handleChange(e)}}
        />
        </h2> 
    </div>
  )
}

export default Profile
