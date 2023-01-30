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
    navigate('/')
  }

  return (
    <div className='topnav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>

      {currentUser ? 
        <div>
          <NavLink to="/recitals/new">Add Recital</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
          <button className='logout-btn' onClick={handleLogoutClick}>Logout</button>
        </div> : 
        <div>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>}

    </div>
  )
}

export default NavBar
