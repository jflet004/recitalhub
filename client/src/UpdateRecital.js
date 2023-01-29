import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateRecital = ({ updateRecital }) => {
  const navigate = useNavigate()
  const params = useParams()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    capacity: ""
  })

  useEffect(() => {
    fetch(`/recitals/${params.id}`)
    .then( r => r.json())
    .then(data => setFormData({
      title: data.title,
      description: data.description,
      capacity: data.capacity
    }))
  }, [params.id])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`/recitals/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(updateRecital)
          navigate(`/recitals/${params.id}`)
        } else {
          r.json().then(data => console.log(data))
        }
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label>Capacity</label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </form>
      <br />
      
    </div>
  )
}

export default UpdateRecital
