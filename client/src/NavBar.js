import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navigation-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
    </div>
  )
}

export default NavBar
