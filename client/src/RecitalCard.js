import React from 'react'

const RecitalCard = ({recital}) => {
  return (
    <div>
      <h1>{recital.title}</h1>
      <p>{recital.description}</p>
    </div>
  )
}

export default RecitalCard
