import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'

const RecitalCard = ({ recital }) => {

  const { currentUser } = useContext(UserContext)

  const { id, title, img_url } = recital
  
  return (
    <div>
      <img src={img_url} alt="recital instrument" width="400px" height="auto" />
      <h2>{title}</h2>
      {!currentUser || currentUser.error ? <p>Signup or login to view details</p> : <Link to={`/recitals/${id}`}> <h5>View Event</h5> </Link>}
      
    </div>
  )
}

export default RecitalCard
