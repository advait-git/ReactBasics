import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(19)

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }   
  }
  const addValue=()=>{
    if(counter<20)
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
