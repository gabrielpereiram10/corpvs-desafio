import './App.css';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { addNumber } from './service';


function App() {
  const [number, setNumber] = useState("")
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addNumber(number)
      .then(() => setNumber(""))
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <div className='content'>
        <form>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button className="button" onClick={handleSubmit}>Adicionar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
