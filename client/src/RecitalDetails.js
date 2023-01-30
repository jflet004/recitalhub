import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { UserContext } from './context/user'
// import myImage from '../src/images/cello.jpg'

const RecitalDetails = ({ deleteRecital }) => {

  const { currentUser } = useContext(UserContext)

  const [recital, setRecital] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)


  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/recitals/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setRecital(data)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

  }, [params.id])

  const { id, title, description } = recital


  const handleDelete = () => {
    fetch(`/recitals/${params.id}`, {
      method: "DELETE"
    })
      .then(r => {
        if (r.ok) {
          deleteRecital(id)
          navigate('/recitals')
        } else {
          r.json().then(data => console.log(data))
        }
      })
  }

  const handleBuyClick = () => {
    const ticket = {
      recital_id: id,
      user_id: currentUser.id,
      price: 30.50,
      quantity: quantity
    }

    fetch(`/tickets/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket)
    })
      .then(res => {
        if (res.ok) {
          navigate('/profile')
        } else {
          res.json().then(data => console.log(data)
          )
        }
      })
  }

  const handleQuantityChange = e => {
    if (e.target.value <= recital.tickets_left) {
      setQuantity(e.target.value)
    } else if (recital.tickets_left === 0) {
      alert('No more tickets available')
    } else {
      alert(`Only ${e.target.value - 1} tickets available`)
    }
  }

  if (loading) return <h1>Loading</h1>

  const studentsPerforming = recital.students.map(student => <li key={student.id}>{student.name}</li>)

  return (
    <div className='details'>
      <h1>{title}</h1>
      <Link to={`/recitals/${id}/edit`}> Update</Link>
      <p>{description}</p>
      <h3>Students Performing:</h3>
      {studentsPerforming}
      <br/>
      <label>Quantity:</label> <input type="number" min="1" max="5" value={quantity} onChange={handleQuantityChange} />

      {recital.tickets_left > 0 ? <button onClick={handleBuyClick}>Buy Tickets</button> : "Sold Out"}
      <button className='delete-btn' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default RecitalDetails
