import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  const removeValue=()=>{
    setCounter(counter-1);
  }
  const addValue=()=>{
    setCounter(counter+1);
  }
  return (
   <div>
    <h1>
      Chai Aur React
    </h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add value : {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value : {counter}</button>
   </div>
  )
}

export default App
