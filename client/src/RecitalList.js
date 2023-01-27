import React, { useState, useEffect } from 'react'
import BuyTickets from './BuyTickets'
import RecitalCard from './RecitalCard'

const RecitalList = ({ recitals }) => {


  const recitalList = recitals.map(recital => (
    <RecitalCard key={recital.id} recital={recital} />
  ))

  return (
    <ul>
      <h1>Recital List Here</h1>
      {recitalList}
    </ul>
  )
}

export default RecitalList
