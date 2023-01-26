import React from 'react'
import BuyTickets from './BuyTickets'

const RecitalCard = ({ recital }) => {


  const handleBuyTicketsBtn = () => {
    fetch(`/recitals/${recital.id}`)
      .then(r => r.json())
      .then(data => (
        <BuyTickets key={data.id} data={data} />
      ))
      .catch(error => console.log(error))
  }


  return (
    <div>
      <h1>{recital.title}</h1>
      <button onClick={handleBuyTicketsBtn}>Buy Tickets</button>
    </div>
  )
}

export default RecitalCard
