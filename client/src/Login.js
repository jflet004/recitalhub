import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const { username, password } = formData

  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      username,
      password
    }

    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setCurrentUser(user)
            navigate('/profile')
          })
        } else {
          r.json().then(data => console.log(data.errors))
        }
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange} />
        <label>Password</label>
        <input type='password'
          name='password'
          value={password}
          onChange={handleChange} />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
