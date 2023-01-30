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
    setCurrentUser(null)
    navigate('/')
  }

  if (!currentUser || currentUser.error) {
    return (
      <div className='topnav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recitals">Upcoming Recitals</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    )
  } else if (currentUser.admin) {
    return (
      <div className='topnav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recitals">Upcoming Recitals</NavLink>
        <NavLink to="/recitals/new">Add Recital</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <button className='logout-btn' onClick={handleLogoutClick}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className='topnav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recitals">Upcoming Recitals</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <button className='logout-btn' onClick={handleLogoutClick}>Logout</button>
      </div>
    )
  }

}

export default NavBar
