import React from 'react'

const User = ({ user }) => (
    <>
    <h1>{user.name}</h1>
    <img src={user.avatar_url} alt={user.name} style={{height: "300px"}}/>
    <h3>{user.location}</h3>
  </>
)

export default User
