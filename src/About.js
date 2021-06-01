import './App.css'
import React from 'react'
import { Route, Link } from 'react-router-dom'

export const Services = () => <><h2>[ Services ]</h2></>
export const History = () => <><h2>[ History ]</h2></>
export const Location = () => <><h2>[ Location ]</h2></>

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
