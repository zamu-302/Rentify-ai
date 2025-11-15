import React from 'react'
import Navbar from '../Navbar'
import { BrowserRouter } from 'react-router-dom'
import House from '../../assets/house.png'

const Homepage = () => {
  return (
    <div>
        <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      <div className='flex flex-col p-4 h-[500px] w-full bg-gradient-to-t from-[#111111] via-[#222222] to-[#111111] '>
        <div className='flex flex-row justify-between w-full'> 
            <div className='justify-start self-center p-4'>
        <h1 className=' text-5xl font-montserrat font-bold text-white '>Discover Your New Home</h1>
        <button className='bg-white hover:-translate-y-1 text-black font-semibold rounded-lg transition duration-300 px-6 py-3 mt-10'>Discover Now</button>
            </div>
        <img src={House} alt="" className='justify-end p-1' />
        </div>
        
       </div>
    </div>
  )
}

export default Homepage
