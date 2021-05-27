import React from 'react'

const User = ({ user }) => (
    <>
    <h1>{user.name}</h1>
    <h3>{user.address.city}</h3>
    <p>Company: {user.company.name}</p>
    <hr
      style={{
          color: "grey",
          backgroundColor: "pink",
          height: 5
      }}
    />
  </>
)

export default User
