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
    <div className='navigation-bar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recitals">Upcoming Recitals</NavLink>
      <NavLink to="/recitals/new">Add Recital</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      {currentUser ? (
        <div>
          <NavLink to="/profile">My Profile</NavLink>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>) : null}

    </div>
  )
}

export default NavBar
