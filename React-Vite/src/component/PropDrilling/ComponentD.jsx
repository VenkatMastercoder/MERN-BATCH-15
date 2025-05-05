import React from 'react'

const ComponentD = (props) => {
  return (
    <div className='border border-green-500 py-5'>
      <p>ComponentD</p>

      <p>{props.data}</p>
    </div>
  )
}

export default ComponentD
