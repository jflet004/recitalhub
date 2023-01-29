import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BuyTickets = () => {

  const [recital, setRecital] = useState([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [errors, setErrors] = useState(false)
  const params = useParams()

  useEffect(() => {
    fetch(`/recitals/${params.id}`)
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            setRecital(data)
            setLoading(false)
          })
        } else {
          r.json().then(data => setErrors(data.error))
        }
      })
  }, [params.id])

  const handleQuantityChange = e => setQuantity(e.target.value)
  const handleBuyClick = () => console.log(`Purchasing ${quantity} tickets`)

  if (loading) return <h1>LOADING...</h1>
  // if (errors) return <h1>{errors}</h1>

  const { title, description, students } = recital
  const studentList = students.map(student => (<li key={student.id}>{student.name}</li>))

  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h5>Students Performing:</h5>
      <ul>{studentList}</ul>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <button onClick={handleBuyClick}>Buy Tickets</button>
    </div>
  )
}

export default BuyTickets
