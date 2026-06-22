import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

function App() {
  return (
    // bg-black locks the screen black, h-screen/w-screen takes up the entire display
    <div className="w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center m-0 p-4">
      <Hero />
    </div>
  )
}

export default App