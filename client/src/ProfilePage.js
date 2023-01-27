import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  const params = useParams()

  useEffect(() => {
    fetch(`/users/${params.id}`)
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            setUser(data)
            setLoading(false)
          })
        } else {
          r.json().then(data => setErrors(data.error))
        }
      })
  }, [])

  if (loading) return <h1>Loading</h1>
  if (errors) return <h1>{errors}</h1>

  const userTickets = user.tickets.map(ticket => ticket.recital)
  const attendingRecitals = userTickets.map(recital => (
    <li key={recital.id}>Event: {recital.title} <br/>Number of Tickets: {recital.quantity}</li>))

  return (
    <div>
      <h1>Welcome {user.username}!</h1>
      <h2>Orders:</h2>
      <ul>
        {attendingRecitals}
      </ul>
    </div>
  )
}

export default ProfilePage
