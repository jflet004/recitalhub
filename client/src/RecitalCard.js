import React from 'react'

const RecitalCard = ({recital}) => {

  const handleBuyTicketsBtn = () => {

  }

  return (
    <div>
      <h1>{recital.title}</h1>
      <button onClick={handleBuyTicketsBtn}>Buy Tickets</button>
    </div>
  )
}

export default RecitalCard
