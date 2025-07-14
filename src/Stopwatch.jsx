import React, { useState, useEffect, useRef } from 'react';


const Stopwatch = () => {
  return (
    <div className='stopwatch'>
      <div className='display-time'>
        00:00:00
      </div>
      
      <button className='start-button'>Start</button>
      <button className='stop-button'>Stop</button>
      <button className='reset-button'>Reset</button>
      <button className='record-button'>Record</button>

      <div className='records-div'>
        <h2>Recorded Time</h2>
        <li>2:2:2</li>
      </div>
    </div>
  )
}

export default Stopwatch
