import React from 'react'

const BuyTickets = ({data}) => {
  return (
    <div>
      <h1>Buy Tickets Page</h1>
      <ul>
        {data.title}
      </ul>
    </div>
  )
}

export default BuyTickets
