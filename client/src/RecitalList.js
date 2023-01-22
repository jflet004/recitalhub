import React, { useState, useEffect } from 'react'
import RecitalCard from './RecitalCard'

const RecitalList = () => {
  const [recitals, setRecitals] = useState([])

  useEffect(() => {
    fetch("/recitals")
      .then(r => r.json())
      .then(data => setRecitals(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <ul>
      <h1>Recital List Here</h1>
      {recitals.map(recital => (
          <RecitalCard key={recital.id} recital={recital} />
      ))}
    </ul>
  )
}

export default RecitalList
