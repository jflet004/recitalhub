import React, { useState } from 'react'

const NewRecitalForm = ({ addRecital }) => {

  const [errors, setErrors] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/recitals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(addRecital)
        } else {
          r.json().then(data => setErrors(data.errors))
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
        <input type="submit" value="Add Recital" />
      </form>
      <br />
      {/* {errors ? errors.map(e => <div>{e}</div>) : null} */}
    </div>
  )
}

export default NewRecitalForm
