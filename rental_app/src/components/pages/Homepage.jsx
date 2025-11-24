import React from 'react'
import Navbar from '../Navbar'
import { BrowserRouter } from 'react-router-dom'
import House from '../../assets/house.png'
import home1 from '../../assets/airbnb.jpeg'
import home2 from '../../assets/airbnb2.jpeg'
import home3 from '../../assets/airbnb3.jpeg'
import Footer from '../Footer'

const Homepage = () => {
  return (
    <div>
        <BrowserRouter>
      <Navbar/>
      </BrowserRouter>

      <div className='flex flex-col p-4 h-[500px] w-full bg-gradient-to-t from-[#111111] via-[#222222] to-[#111111] '>
            <div className='flex flex-row justify-between w-full'> 
                <div className='justify-start self-center p-4'>
                    <h1 className=' text-5xl font-montserrat font-bold text-white mb-10'>Discover Your New Home</h1>
                    <p className='text-gray-100 text-1xl font-sans tracking-wide'>Find your next home easily. Browse a range of apartaments and houses that fits your lifestyle.
                        <br />Our simple search and clear listings make it easy to choose and move into the right place. <br />Start your journey to home you'll love today.
                    </p>
                    <button className='bg-white hover:-translate-y-1 text-black font-semibold rounded-lg transition duration-300 px-6 py-3 mt-10'>Discover Now</button>
                </div>
                <img src={House} alt="" className='justify-end p-1' />
            </div>
        
       </div>
       {/*     popular homes section */ }
       <div className='mb-[150px]'>
             <h1 className=' m-3 text-2xl font-sans font-bold'>Popular Homes in Addis Ababa</h1>
             <div className=' grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 gap-6 m-3 '>
        
                <figure className='w-full h-[200px]'>
                    <img src={home1} alt="" className='object-cover w-full h-full rounded-lg ' />
                    <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
                    <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
                </figure >

                <figure className='w-full h-[200px] '>
                    <img src={home2} alt="" className='object-cover w-full h-full rounded-lg  ' />
                    <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
                    <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
                </figure>

                <figure className='w-full h-[200px]    object-cover' >
                    <img src={home3} alt="" className='object-cover w-full h-full rounded-lg' />
                    <figcaption className='font-serif'>Ayat-Lemikura</figcaption>
                    <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
                </figure>

                <figure className='w-full h-[200px]  '>
                    <img src={home1} alt="" className='object-cover w-full h-full rounded-lg' />
                    <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
                    <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
                </figure >

                <figure className='w-full h-[200px] '>
                    <img src={home2} alt="" className='object-cover object-center w-full h-full rounded-lg ' />
                    <figcaption className='font-serif'>Ayat-Lemikura</figcaption>
                    <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
                </figure>

                <figure className='w-full h-[200px]  ' >
                    <img src={home3} alt="" className='object-cover w-full h-full rounded-lg' />
                    <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
                    <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
                </figure>
        </div>
       
       </div>
         {/*     hotels section */ }
       <div className='mb-[150px]'>
        <h1 className=' m-3 text-2xl font-sans font-bold'>Featured Hotels</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 gap-6 m-3 '>
        
            <figure className='w-full h-[200px]'>
            <img src={home1} alt="" className='object-cover w-full h-full rounded-lg ' />
             <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure >
            <figure className='w-full h-[200px] '>
            <img src={home2} alt="" className='object-cover w-full h-full rounded-lg  ' />
             <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>
            <figure className='w-full h-[200px]    object-cover' >
            <img src={home3} alt="" className='object-cover w-full h-full rounded-lg' />
             <figcaption className='font-serif'>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>
            <figure className='w-full h-[200px]  '>
            <img src={home1} alt="" className='object-cover w-full h-full rounded-lg' />
            <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure >
            <figure className='w-full h-[200px] '>
            <img src={home2} alt="" className='object-cover object-center w-full h-full rounded-lg ' />
             <figcaption className='font-serif'>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>
            <figure className='w-full h-[200px]  ' >
            <img src={home3} alt="" className='object-cover w-full h-full rounded-lg' />
             <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>
        </div>
        </div>
        
          {/*     cars section */ }
       <div className='mb-[150px]'>
        <h1 className=' m-3 text-2xl font-sans font-bold'>Available Cars</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 gap-6 m-3 '>
        
            <figure className='w-full h-[200px]'>
            <img src={home1} alt="" className='object-cover w-full h-full rounded-lg ' />
             <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure >


            <figure className='w-full h-[200px] '>
            <img src={home2} alt="" className='object-cover w-full h-full rounded-lg  ' />
             <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>

            <figure className='w-full h-[200px]    object-cover' >
            <img src={home3} alt="" className='object-cover w-full h-full rounded-lg' />
             <figcaption className='font-serif'>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>

            <figure className='w-full h-[200px]  '>
            <img src={home1} alt="" className='object-cover w-full h-full rounded-lg' />
            <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure >

            <figure className='w-full h-[200px] '>
            <img src={home2} alt="" className='object-cover object-center w-full h-full rounded-lg ' />
             <figcaption className='font-serif'>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>

            <figure className='w-full h-[200px]  ' >
            <img src={home3} alt="" className='object-cover w-full h-full rounded-lg' />
             <figcaption className='font-serif '>Ayat-Lemikura</figcaption>
             <figcaption className='font-serif text-gray-400'>$50 for 2 nights</figcaption>
            </figure>
            
        </div>
        </div>
        <BrowserRouter>
        <Footer/>
        </BrowserRouter>
       
       </div>
    
  )
}

export default Homepage
