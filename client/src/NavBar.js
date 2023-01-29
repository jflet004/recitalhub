import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const NavBar = () => {

  const params = useParams()

  return (
    <div className='navigation-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
      <NavLink to="/recitals/add">Add Recital</NavLink>
      <NavLink to="/users/new">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to={`/users/${params.id}`}>My Profile</NavLink>
      <button>Logout</button>
    </div>
  )
}

export default NavBar
