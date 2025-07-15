import React, {useState} from 'react'

const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState('')


  // Get/Save Current Notes
  const getCurrNote = (e) => {
    setCurrNote(e.target.value, 1);
  }

  // Remove selected notes via array filter method
  const removeCurrNote = (index) => {
    setNotes(notes.filter((_,i) => i != index))
  }

  const moveUp = (index) =>{
    // Array Destructuring
    if(index > 0){ // Ensure it's not the first element
      const updatedNotes = [...notes]; // Create a copy
       // Swap with the next element
      [updatedNotes[index], updatedNotes[index - 1]] = 
      [updatedNotes[index - 1], updatedNotes[index]];
      setNotes(updatedNotes);
    }
  }

  const moveDown = (index) =>{
    if (index < notes.length - 1) {  // Ensure it's not the last element
      const updatedNotes = [...notes]; // Create a copy
      // Swap with the next element
      [updatedNotes[index], updatedNotes[index + 1]] = 
      [updatedNotes[index + 1], updatedNotes[index]];
     
      setNotes(updatedNotes); // For debugging (replace with state update)
 
    }
  }

  
  const setNotesHandler = () => {
    if(currNote != ''){
      setNotes(n => [...n, currNote]);
      setCurrNote('');
    } 
  }

  

  return (
    <div className='notes'>
      <h2>Simple Note Project</h2>

      <input type="text" value={currNote} onChange={getCurrNote} placeholder='Notes'/>
      <button className='btn-add' onClick={setNotesHandler} ><i className="fi fi-rr-add"></i></button>

      
      <div className='notes-list'>
        <h2>Note List</h2>
        <table>
          <thead>
            <tr>
              <td>List</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {notes.map((note, index) => (
            <tr key={index}>
              <td>
               {note}
              </td>
              <td className='td-buttons'>
                <button className='remove-btn' onClick={() => removeCurrNote(index)}><i className="fi fi-rr-cross-circle"></i></button>
                <button className='up-btn' onClick={() => moveUp(index)}><i className="fi fi-sr-angle-circle-up"></i></button>
                <button className='down-btn' onClick={() => moveDown(index)}><i className="fi fi-sr-angle-circle-down"></i></button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Notes
