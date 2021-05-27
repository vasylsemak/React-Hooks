import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'
// https://api.github.com/users/vasylsemak

const ApiGithub = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.log("Error ===>", err.message))
  }, [])

  return !data
    ? (<p>Data request sent an EMPTY object.</p>)
    : (data.map(user => <User key={user.id} user={user} />))
}

export default ApiGithub
