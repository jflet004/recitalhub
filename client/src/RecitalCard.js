import React from 'react'
import { Link } from 'react-router-dom'
// import BuyTickets from './BuyTickets'

const RecitalCard = ({ recital }) => {
  console.log(recital)
  const { id, title, description, tickets_left } = recital
  return (
    <div>
      <h1>{title}</h1>
      <p>{tickets_left} tickets left</p>
      <Link to={`/recitals/${id}`}> <h3>Buy Tickets</h3> </Link>
    </div>
  )
}

export default RecitalCard
