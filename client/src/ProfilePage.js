import React, { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

const ProfilePage = () => {

  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/me')
      .then(r => r.json())
      .then(data => {
        setUser(data)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h3>Please Log In</h3>

  if (!user || user.error) {
    return (
      <p>Signup or Login to access your profile</p>
    )
  } else {

    const userTickets = user.tickets.map(ticket => ticket.recital_info)
    const attendingRecitals = userTickets.map((recital) => (
      <li key={recital.id}>
        <span>Event: {recital.title} - </span>
        <span>Number of Tickets: {recital.quantity}</span>
      </li>))

    return (
      <div className='text'>
        <h1>Welcome {user.username}!</h1>
        {user.admin ? <h5><i>Admin Account</i></h5> : null}
        <h2>Recent Orders:</h2>
        {attendingRecitals}
      </div>
    )
  }
}

export default ProfilePage
