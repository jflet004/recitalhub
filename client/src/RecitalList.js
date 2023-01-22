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

  const recitalList = recitals.map(recital => (
    <RecitalCard key={recital.id} recital={recital}/>
  ))

  return (
    <div>
      <h1>Recital List Here</h1>
      {recitalList}
    </div>
  )
}

export default RecitalList
