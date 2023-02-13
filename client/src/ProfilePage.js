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
      .catch(error => alert(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h3>Please Log In</h3>

  if (!user || user.error) {
    return <p>Signup or Login to access your profile</p>
  }

  const recentOrders = user.tickets.map(ticket => (
    <li key={ticket.id} className="order-item">
      <span className="order-number">Order Number: {ticket.created_at.slice(17)}</span>
      <br />
      <span className="event-name">Event: {ticket.recital.title} <br/></span>
      <span className="event-name">Date: {ticket.recital.date} <br/></span>
      <span className="event-name">Number of Tickets: {ticket.quantity}</span>
      <span className="event-name">Total Amount Paid: ${ticket.total_price}</span>
      <br />
      <br />
    </li>
  ))

  return (
    <div className='text'>
      <h1>Welcome {user.username}!</h1>
      {user.admin ? <h5><i>Admin Account</i></h5> : null}
      <h2>Current Orders:</h2>
      {recentOrders}
    </div>
  )
}

export default ProfilePage
