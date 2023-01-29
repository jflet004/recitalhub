import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navigation-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
      <NavLink to="/recitals/add">Add Recital</NavLink>
      <NavLink to="/users/3">My Profile</NavLink>
      <NavLink to="/users/new">Signup</NavLink>
      <button>Logout</button>
    </div>
  )
}

export default NavBar
