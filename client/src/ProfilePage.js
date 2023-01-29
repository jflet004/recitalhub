import React, { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

const ProfilePage = () => {

  const [user, setUser] = useState(false)

  useEffect(() => {
    fetch('/me')
      .then(r => r.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  if (!user) return <h1>Loading</h1>

  const userTickets = user.tickets.map(ticket => ticket.recital_info)

  const attendingRecitals = userTickets.map((recital) => (
    <li key={recital.id}>
      Event: {recital.title}
      <br />
      Number of Tickets: {recital.quantity}
    </li>))

  return (
    <div>
      <h1>Welcome {user.username}!</h1>
      <h2>Recent Orders:</h2>
      <ul>
        {attendingRecitals}
      </ul>
    </div>
  )
}

export default ProfilePage
