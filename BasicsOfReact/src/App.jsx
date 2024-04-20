import './App.css'
import { useState } from 'react';

function App() {
  let [counter,setCounter]= useState(15)

const addValue = () =>{
  setCounter(counter+1);
}
const decValue=()=>{
  setCounter(counter-1);
}

  return (
    <>
    <h1>Advait and React</h1>
    <h2>Counter  : {counter}</h2>

    <button
      onClick={addValue}
    >Increment By 1 : {counter}</button>
    <br/><br/>
    <button
      onClick={decValue}
    >Decrement By 1 : {counter}</button>
    </>
  )
}

export default App
