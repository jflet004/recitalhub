import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = ({ currentUser, updateUser }) => {

  const navigate = useNavigate()

  const handleLogoutClick = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(r => {
      if(r.ok) {
        updateUser(false)
        navigate('/login')
      }
    })
  }
  
  return (
    <div className='navigation-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
      <NavLink to="/recitals/add">Add Recital</NavLink>
      <NavLink to="/users/new">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      {currentUser ? <NavLink to={"/users/:id"}>My Profile</NavLink> : null}
      {currentUser ? <button onClick={handleLogoutClick}>Logout</button> : null}
    </div>
  )
}

export default NavBar
