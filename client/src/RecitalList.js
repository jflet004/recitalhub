import React, { useState, useEffect } from 'react'

const RecitalList = () => {
  const [recitals, setRecitals] = useState([])

  useEffect(() => {
    fetch("/recitals")
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Recital List Here</h1>
    </div>
  )
}

export default RecitalList
