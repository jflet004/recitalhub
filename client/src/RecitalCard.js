import React from 'react'
import { Link } from 'react-router-dom'

const RecitalCard = ({ recital }) => {

  const { id, title, img_url } = recital

  console.log(recital)
  
  
  return (
    <div>
      <img src={img_url} alt="image" width="400px" height="auto" />
      <h2>{title}</h2>
      <Link to={`/recitals/${id}`}> <h5>View Event</h5> </Link>
      
    </div>
  )
}

export default RecitalCard
