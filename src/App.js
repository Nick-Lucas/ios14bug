import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState("2020-09-15")
  console.log(date)

  
  const [open, setOpen] = useState(false)
  const [derender, setDerender] = useState(false)

  if (derender) return null

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => setDerender(true)}>Derender All</button>

      <div>
        {open && 
          <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(false)
          }}>
            <input 
              type="date" 
              min="2020-05-01" 
              max="2020-11-30" 
              value={date} 
              onChange={e => setDate(e.target.value)} 
            />

            <button type="submit">Submit</button>
          </form>
        }
      </div>
    </div>
  );
}

export default App;
