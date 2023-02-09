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
    navigate('/login')
  }

  return (
    <div className='topnav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/upcoming-recitals">Upcoming Recitals</NavLink>
      {!currentUser || currentUser.error ? (
        <>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/profile">My Profile</NavLink>
          {currentUser.admin ? (
            <NavLink to="/new-recital">Add Recital</NavLink>
          ) : null}
          <button className='logout-btn' onClick={handleLogoutClick}>Logout</button>
        </>
      )}
    </div>
  )


}

export default NavBar
