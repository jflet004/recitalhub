import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RecitalCard = ({ recital }) => {

  const { id, title, tickets_left } = recital
  
  const[tickets, setTickets] = useState(tickets_left)

console.log(tickets)
  
  return (
    <div>
      <h1>{title}</h1>
      <Link to={`/recitals/${id}`}> <h3>View Event</h3> </Link>
      
    </div>
  )
}

export default RecitalCard
