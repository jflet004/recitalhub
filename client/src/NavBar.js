import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = ({ currentUser, updateUser }) => {

  const navigate = useNavigate()

  const handleLogoutClick = () => {
    fetch('/logout', {
      method: "DELETE"
    })
      updateUser(false)
      navigate('/login')
  }
  
  return (
    <div className='navigation-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
      <NavLink to="/recitals/new">Add Recital</NavLink>
      <NavLink to="/users/new">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      {currentUser ? <NavLink to={"/me"}>My Profile</NavLink> : null}
      {currentUser ? <button onClick={handleLogoutClick}>Logout</button> : null}
    </div>
  )
}

export default NavBar
