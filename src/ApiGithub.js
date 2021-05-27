import React from 'react'
import { useState, useEffect } from 'react'
import User from './User'

const ApiGithub = ({ login }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    if(!login) return

    setLoading(true)

    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .then(setLoading(false))
      .catch(err => setErr(err))
  }, [login])

  return loading ? (<p>Loading data from API</p>)
    : err ? (<p>{err.message}!</p>)
    : !data ? null
    : (<User key={data.id} user={data} />)
}

export default ApiGithub
