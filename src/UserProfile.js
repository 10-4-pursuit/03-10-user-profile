import React from 'react'

function UserProfile({name, location}) {
  return (
    <div>
        <p>Name:{name}</p>
        <p>Location:{location}</p>
    </div>
  )
}

export default UserProfile