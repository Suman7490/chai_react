import { useState, useRef } from 'react'
import './App.css'
import Card from './components/Card'
import Practice from './components/Practics'
import PasswordGenerator from './components/PasswordGenerator'
import CurrrencyConvertor from './components/CurrrencyConvertor'
import InputBox from './components/InputBox'
import HigherOrderCmp from './components/HigherOrderCmp'
import CoutryBasedStateDropdown from './components/CoutryBasedStateDropdown'
import ToDo from './components/ToDo'
import Home from './components/Home'

function App() {
  const [bg, setBg] = useState('')

  return (
    <>
      <div className='h-screen max-h-screen min-h-screen w-full max-w-full min-w-full' style={{ background: bg }}>
        {/* <div className='grid grid-rows-1 grid-cols-1 center'>
          <div className='bg-white shadow-sm fixed-top flex flex-wrap justify-center bottom-6 px-2 inset-x-0'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setBg("red")}>Red</button>
            </div>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setBg("green")}>Green</button>
            </div>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setBg("blue")}>Blue</button>
            </div>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }} onClick={() => setBg("black")}>Black</button>
            </div>
          </div>
        </div> */}
        <Home/>

        {/* <div className='cotainer-fluid'>
          <div className='grid sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
            <div className='border'>
              <PasswordGenerator />
            </div>
            <div className='border'>
              <Practice />
            </div>
          </div>


          <div className='grid sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 xl:grid-rows-2 2xl:grid-rows-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 my-1'>
            <div className='border px-1 py-1'>
              <div className='flex gap-x-2'>
                <Card username="suman" role="developer" />
              </div>
            </div>
            <div className='border px-1 py-1'>
              <HigherOrderCmp bgColor="blue" cmp={<Card />} />
            </div>
            <div className='border px-1 py-1'>
            <CoutryBasedStateDropdown />
            </div>
            <div className='border px-1 py-1'>
            <ToDo />
            </div>
          </div>     
        </div> */}
      </div>

    </>




  )
}

export default App
