import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <div>
      <h2>[ Services ]</h2>
    </div>
  )
}

export function History() {
  return (
    <div>
      <h2>[ History ]</h2>
    </div>
  )
}

export function Location() {
  return (
    <div>
      <h2>[ Location ]</h2>
    </div>
  )
}


const About = () => (
  <div className='about'>
    <div>
      <Link to="/about/services">Services</Link>
      <Link to="/about/history">History</Link>
      <Link to="/about/location">Location</Link>
    </div>
    <h1>[ ABOUT ]</h1>
  </div>
)

export default About
