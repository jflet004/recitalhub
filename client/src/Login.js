import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [errors, setErrors] = useState([])
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
            navigate('/')
          })
        } else {
          r.json().then(data => setErrors(data.errors))
        }
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br/>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange} />
          <br/>
        <label>Password</label>
          <br/>
        <input type='password'
          name='password'
          value={password}
          onChange={handleChange} />
          <br/>
        <input type='submit' value='Login' />
          <br/>
      </form>
      {errors ? errors : null}
    </div>
  )
}

export default Login
