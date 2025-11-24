import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../assets/instagram (1).png'
import telegram from '../assets/telegram.png'
import tiktok from '../assets/social-media.png'
const Footer = () => {
  return (
    <div>
      <div className='bg-gray-900 text-white p-6 text-center flex flex-col '>
        <div className=' flex  w-full h-[100px] shadow-sm border-b border-white'>
          <h1 className='text-center font-serif text-4xl font-bold w-full self-center'>Rentify</h1>
        </div>
      <div className='my-10  w-full'>
        <div className='w-full flex justify-center '>
            <ul className='font-serif gap-[100px] flex text-1xl'>
              <li> <Link to='/pages/Support'>  About</Link></li>
              <li> <Link to='/pages/Support'>  Support</Link></li>
              <li> <Link to='/pages/Support'>  Contact us</Link></li>
              <li> <Link to='/pages/Support'>  Services</Link></li>
              <li> <Link to='/pages/Support'>  Works</Link></li>
            </ul>
         </div>
         </div>
         <div className='w-full flex  justify-center gap-[50px] mb-[100px]'>
          <img src={instagram} alt="" className='w-[50px] h-[50px]' />
          <img src={telegram} alt="" className='w-[50px] h-[50px]' />
          <img src={tiktok} alt="" className='w-[50px] h-[50px]' />

         
      </div>
      <div className='flex justify-center w-full text-gray-300 '>
        <p className=' px-4 border-r-2 border-white'>Terms&Conditions</p>
        <p className=' px-4 border-r-2 border-white'>PrivacyPolicy</p>
        <p className=' px-4'>Support Us</p>
      
      </div>
      <div className='flex justify-center text-gray-300 mt-4'>
        <p>&copy; 2025 Studio AllRights Reserved.</p>
      </div>



      </div>
      
    </div>
  )
}

export default Footer
