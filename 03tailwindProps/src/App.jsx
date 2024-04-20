import './App.css'
import Card from './components/Card'

function App() {
//  let myObj = ()=>{
//     username:
//  }
  return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
    TailWind Test
   </h1>
   <Card username="Alina" btText='Click Me' className='p-4 mb-4' />
   <Card username="Akshu" btText='Visit Me'/>
   </>
  )
}

export default App
