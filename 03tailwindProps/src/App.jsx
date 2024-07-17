import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
const [color,setColor] = useState("olive")
  return (
   <div className='w-full h-full duration-200'
      style={{backgroundColor:color}}
   >
    <div className='fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2
    '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white
      px-3 py-2 rounded-3xl
      '>
      <button
      onClick={()=>setColor("red")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}
      >
        RED 
      </button>
      <button
      onClick={()=>setColor("black")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}
      >
        BLACK
      </button>
      <button
       onClick={()=>setColor("green")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}
      >
        GREEN
      </button>
      <button
       onClick={()=>setColor("blue")}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}
      >
        BLUE
      </button>
      </div>
    </div>
   



   
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
    TailWind Test
   </h1>
   <Card username="Alina" btText='Click Me' className='p-4 mb-4' />
   <br/>
   <Card username="Akshu" btText='Visit Me'/>
   </div>
  )
}

export default App
