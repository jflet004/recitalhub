import React from 'react'
import { Link } from 'react-router-dom'

const RecitalCard = ({ recital }) => {

  const { id, title } = recital
  
  
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/recitals/${id}`}> <h5>View Event</h5> </Link>
      
    </div>
  )
}

export default RecitalCard
