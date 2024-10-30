import { useState, useRef } from 'react'
import './App.css'
import Card from './components/Card'
import Practice from './components/Practics'
import Hooks from './components/Hooks'

function App() {

  return (
    <>
      <div className='h-screen max-h-screen w-full max-w-full bg-black'>
        <Hooks />
        <div className='flex gap-x-2'>
          <Card username="suman" role="developer"/>
          <Card />
          <Card />
        </div>
      </div>

    </>




  )
}

export default App
