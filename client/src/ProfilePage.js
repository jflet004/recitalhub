import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = ({ updateUser, currentUser }) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  const params = useParams()

  useEffect(() => {
    fetch(`/users/${params.id}`)
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            updateUser(user)
            setLoading(false)
          })
        } else {
          r.json().then(data => setErrors(data.error))
        }
      })
  }, [params.id, updateUser])

  if (loading) return <h1>Loading</h1>
  if (errors) return <h1>{errors}</h1>

  // const userTickets = currentUser.tickets.map(ticket => ticket.recital)
  // const attendingRecitals = userTickets.map(recital => (
  //   <li key={recital.id}>Event: {recital.title} <br/>Number of Tickets: {recital.quantity}</li>))

  return (
    <div>
      <h1>Welcome {currentUser.username}!</h1>
      <h2>Orders:</h2>
      <ul>
        {/* {attendingRecitals} */}
      </ul>
    </div>
  )
}

export default ProfilePage
