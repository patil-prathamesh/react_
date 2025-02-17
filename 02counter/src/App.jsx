import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);
  function addValue() {
    if(counter < 20)
      setCounter(counter+1);
  }
  function removeValue() {
    if(counter > 0)
      setCounter((prev) => prev - 1)
  }

  return (
    <>
      <h1>Counter Application</h1>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
