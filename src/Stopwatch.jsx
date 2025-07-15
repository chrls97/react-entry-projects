// Import necessary React hooks
import React, { useState, useEffect, useRef } from 'react';

// Define the Stopwatch component
const Stopwatch = () => {
  // State to track if stopwatch is running
  const [isRunning, setIsRunning] = useState(false);
  // State to track elapsed time in milliseconds
  const [elapseTime, setElapseTime] = useState(0);
  // State to store recorded lap times
  const [recordedTimes, setRecordedTimes] = useState([]);
  // Ref to store interval ID for cleanup
  const intervalIdRef = useRef(null);
  // Ref to store the start time reference
  const startTimeRef = useRef(0);

  // Effect hook that runs when isRunning state changes
  useEffect(() => {
    if(isRunning) {
      // Set up interval to update elapsed time every 10ms
      intervalIdRef.current = setInterval(() => {
        // Calculate elapsed time (current time - start time)
        setElapseTime(Date.now() - startTimeRef.current);
      }, 10);

      // Cleanup function to clear interval when component unmounts or dependency changes
      return () => {
        clearInterval(intervalIdRef.current);
      }
    }
  }, [isRunning]); // Only re-run when isRunning changes

  // Start function - begins the stopwatch
  const start = () => {
    setIsRunning(true);
    // Adjust start time to account for any existing elapsed time (for pause/resume)
    startTimeRef.current = Date.now() - elapseTime;
  };

  // Stop function - pauses the stopwatch
  const stop = () => {
    setIsRunning(false);
  };

  // Reset function - stops and clears the stopwatch
  const reset = () => {
    setIsRunning(false);    // Stop the timer
    setElapseTime(0);       // Reset elapsed time to 0
    setRecordedTimes([]);   // Clear all recorded times
  };

  // Record function - saves current time
  const record = () => {
    // Add current formatted time to recordedTimes array
    setRecordedTimes(r => [...r, formatTime()]);
  };

  // Delete selected record
  const deleteRecord = (i) => {
    setRecordedTimes(recordedTimes.filter((_, index) => i !== index));
  }

  // Format time into MM:SS:MS
  const formatTime = () => {
    // Calculate time units from milliseconds
    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapseTime / (1000) % 60);
    let milliseconds = Math.floor((elapseTime % 1000) / 10);

    // Pad with leading zeros for consistent 2-digit display
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Return formatted time string (MM:SS:MS)
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  // Component JSX
  return (
    <div className='stopwatch'>
      <h2>Stopwatch</h2>
      <div className='display-time'>
        {formatTime()}
      </div>
      
      <button onClick={start} className='start-button' title='Start'>
        <i className="fi fi-br-play"></i> 
      </button>
      <button onClick={stop} className='stop-button' title='Stop'>
        <i className="fi fi-br-stop-circle"></i> 
      </button>
      <button onClick={reset} className='reset-button' title='Reset'>
        <i className="fi fi-br-undo"></i> 
      </button>
      <button onClick={record} className='record-button' title='Record' disabled={!isRunning}>
        <i className="fi fi-br-flag-alt"></i> 
      </button>

      <div className='records-div'>
        <h2>Recorded Time</h2>
        {recordedTimes.slice().sort((b, a) => a - b).map((time, index) => (
          <li key={index}>{time} <button onClick={() => deleteRecord(index)} className='stop-button' title='Delete'><i className="fi fi-bs-trash"></i></button></li>
        ))}
      </div>
    </div>
  );
};

// Export the component
export default Stopwatch;