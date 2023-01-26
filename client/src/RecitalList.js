import React, { useState, useEffect } from 'react'
import RecitalCard from './RecitalCard'

const RecitalList = () => {
  const [recitals, setRecitals] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch("/recitals")
      .then(r => {
        if (r.ok) {
          r.json().then(setRecitals)
        } else {
          r.json().then(data => setErrors(data.error))
        }
      })
  }, [])

  const recitalList = recitals.map(recital => (
    <RecitalCard key={recital.id} recital={recital} />
  ))

  if (errors) return <h1>{errors}</h1>

  return (
    <ul>
      <h1>Recital List Here</h1>
      {recitalList}
    </ul>
  )
}

export default RecitalList
