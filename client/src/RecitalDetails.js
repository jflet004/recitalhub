import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { UserContext } from './context/user'

const RecitalDetails = ({ deleteRecital }) => {

  const { currentUser } = useContext(UserContext)

  const [recital, setRecital] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])


  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/recitals/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setRecital(data)
        setErrors(data.error)
      })
      .catch(error => alert(error))
      .finally(() => setLoading(false));

  }, [params.id])

  const { id, title, description } = recital


  const handleDelete = () => {
    fetch(`/recitals/${params.id}`, {
      method: "DELETE"
    })
      .then(r => {
        if (r.ok) {
          deleteRecital(recital)
          navigate('/upcoming-recitals')
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

    fetch(`/tickets`, {
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
  if (errors) return <p>{errors}. Signup or login to gain access</p>

  return (
    <div className='details'>
      <h1>{title}</h1>
      {currentUser.admin ? <Link to={`/recitals/${id}/edit`}> Update</Link> : null}
      <p>{description}</p>
      <h3>Students Performing:</h3>
      {recital.students.map(student => <li key={student.id}>{student.name}</li>)}
      <br />
      <label>Quantity:</label> <input type="number" min="1" max="5" value={quantity} onChange={handleQuantityChange} />
      {recital.tickets_left > 0 ? <button onClick={handleBuyClick}>Buy Tickets</button> : "Sold Out"}
      {currentUser.admin ? <button className='delete-btn' onClick={handleDelete}>Delete</button> : null}
      <br />
    </div>
  )
}

export default RecitalDetails
