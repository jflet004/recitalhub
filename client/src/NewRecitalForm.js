import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const NewRecitalForm = ({ addRecital }) => {

  const { currentUser } = useContext(UserContext)

  const [errors, setErrors] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    capacity: ""
  })
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/recitals/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(addRecital)
          navigate('/recitals')
        } else {
          r.json().then(data => setErrors(data.errors))
        }
      })
  }

  if (!currentUser || currentUser.error) {
    return (<p>Signup or login to gain access to your profile</p>)
  } else {
    return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <label>Capacity</label>
          <br />
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Add Recital" />
        </form>
        <br />
        {errors ? errors : null}
      </div>
    )

  }
}

export default NewRecitalForm
