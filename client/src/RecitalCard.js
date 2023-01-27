import React from 'react'
import { Link } from 'react-router-dom'
// import BuyTickets from './BuyTickets'

const RecitalCard = ({ recital }) => {
  console.log(recital)
  const { id, title, tickets_left } = recital
  return (
    <div>
      <h1>{title}</h1>
      <p>{tickets_left} tickets left</p>
      <Link to={`/recitals/${id}`}> <h3>View Event</h3> </Link>
    </div>
  )
}

export default RecitalCard
