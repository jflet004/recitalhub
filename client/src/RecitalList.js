import React from 'react'
import RecitalCard from './RecitalCard'

const RecitalList = ({ recitals }) => {


  const recitalList = recitals.map(recital => (
    <RecitalCard key={recital.id} recital={recital} />
  ))

  return (
    <div className='text'>
      {recitalList}
    </div>
  )
}

export default RecitalList
