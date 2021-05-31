import './App.css'
import React from 'react'
import { Route, Link } from 'react-router-dom'

const About = () => (
  <div className='about'>
    <h1>[ ABOUT ]</h1>
    <div>
      <Link to="/about/services">Services</Link>
      <Link to="/about/history">History</Link>
      <Link to="/about/location">Location</Link>
    </div>
    <Route path="/about/services" component={Services} />
    <Route path="/about/history" component={History} />
    <Route path="/about/location" component={Location} />
  </div>
)

export default About

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

export function Location(props) {

  return (
    <div>
      <h2>[ Location ]</h2>
    </div>
  )
}
