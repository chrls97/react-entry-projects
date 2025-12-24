import React from 'react'
import { Outlet } from 'react-router-dom'

const JobLayout = () => {
  return (
    <div>
      <div>
        <h2>Job Openings</h2>
        <p>List of current job openings in our company</p>
        <Outlet/>
      </div>
    </div>
  )
}

export default JobLayout
