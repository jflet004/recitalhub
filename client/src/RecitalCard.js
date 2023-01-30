import React from 'react'
import { Link } from 'react-router-dom'

const RecitalCard = ({ recital }) => {

  const { id, title, img_url } = recital
  
  return (
    <div>
      <img src={img_url} alt="recital instrument" width="400px" height="auto" />
      <h2>{title}</h2>
      <Link to={`/recitals/${id}`}> <h5>View Event</h5> </Link>
      
    </div>
  )
}

export default RecitalCard
