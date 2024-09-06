import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='container justify-center flex' style={{backgroundColor: color}}>
      <h1 className='text-3xl font-bold text-white mt-7'>Background Changer Using React</h1>
      <div className='navbarContiner flex flex-wrap justify-center
p-2 fixed  pb-3 border-blue top-44'>
      <div className='navbar flex justify-center rounded-xl'>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#FF0000")} style={{backgroundColor:"#FF0000"}}>Red</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#0000FF")} style={{backgroundColor:"#0000FF"}}>Blue</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#000080")} style={{backgroundColor:"#000080"}}>Navy Blue</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#87CEEB")} style={{backgroundColor:"#87CEEB"}}>Sky Blue</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#008000")} style={{backgroundColor:"#008000"}}>Green</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-black ' onClick={()=> setColor("#FFFF00")} style={{backgroundColor:"#FFFF00"}}>Yellow</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#FFA500")} style={{backgroundColor:"#FFA500"}}>Orange</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-black ' onClick={()=> setColor("#FFFFFF")} style={{backgroundColor:"#FFFFFF"}}>White</button>
        <button className=' py-1 px-4 mr-1 rounded text-lg px-5 border-none shadow-lg text-white ' onClick={()=> setColor("#808080")} style={{backgroundColor:"#808080"}}>Gray</button>
        
      </div>
      </div>
    </div>

  )
}

export default App
