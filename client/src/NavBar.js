import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const NavBar = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogoutClick = () => {
    fetch('/logout', {
      method: "DELETE"
    })
      setCurrentUser(false)
      navigate('/login')
  }
  
  return (
    <div className='topnav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/recitals/new">Add Recital</NavLink>
      <NavLink to="/login">Login</NavLink>
      {currentUser ? (
        <div>
          <NavLink to="/profile">My Profile</NavLink>
          <button className='logout-btn' onClick={handleLogoutClick}>Logout</button>
        </div>) : null}

    </div>
  )
}

export default NavBar
