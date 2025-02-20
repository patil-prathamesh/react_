import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    // setCount(count+1)
    // setCount(count+1);
    setCount((prev) => prev + 1);
    console.log('re')
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <h2>value1: {count}</h2>
      <h2>value2: {count}</h2>
      <Button variant="contained" onClick={handleClick}>Click me</Button>
    </>
  )
}

export default App
