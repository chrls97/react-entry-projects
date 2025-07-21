import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className='job-details'>
      <h1>An error occured.</h1>
      <h3>{error.message}</h3>
      <button onClick={()=>navigate('/')} >Back to Home</button>
    </div>
  )
}

export default Error
