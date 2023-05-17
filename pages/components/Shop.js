import React from 'react'
import Link from 'next/link'

const Shop = () => {
  return (
    <div className='flex flex-col bg-stone-950'>
        <div className='flex flex-col justify-center mt-8 mx-6 md:mt-16 md:mx-16 space-y-6 p-6 rounded-sm banner-img bg-fixed bg-cover bg-left h-[450px]'>
            <h1 className='font-lora text-[2.15rem] md:text-[2.5rem] text-[#F4EBD0]'>Coffee at Your Convenience.</h1>
            <p className='font-poppins text-[1.15rem] text-[#F4EBD0]'>Pick Up, Delivery, or Visit Us</p>
            <div className='pt-4'>
               <Link href='/menu' className='font-poppins text-[1.35rem] text-[#F4EBD0] py-2 px-8 border-2 border-[#F4EBD0] rounded-sm hover:bg-[#F4EBD0] hover:text-stone-950 transition duration-300 '>Menu</Link>
            </div>
        </div>

        <section className='flex flex-col justify-evenly h-[900px] bg-stone-950'>
            <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-16 my-8'>
               <div className='flex items-center justify-center w-[325px] sm:w-[550px] md:w-[350px] h-[250px] md:h-[600px] shop-img bg-cover bg-center rounded-md hover:scale-105 transitoin duration-200'>
                   <h1 className='font-josefin text-[3rem] text-stone-200'>Coffee</h1>
               </div>
               <div className='flex items-center justify-center w-[325px] sm:w-[550px] md:w-[350px] h-[250px] md:h-[600px] bg-cover bg-center rounded-md shop-img-2 hover:scale-105 transitoin duration-200'>
                   <h1 className='font-josefin text-[3rem] text-stone-200'>Pastries</h1>
               </div>
               <div className='flex items-center justify-center w-[325px] sm:w-[550px] md:w-[350px] h-[250px] md:h-[600px] shop-img-3 bg-cover bg-center rounded-md hover:scale-105 transitoin duration-200'>
                   <h1 className='font-josefin text-[3rem] text-stone-200'>Mugs & Cups</h1>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Shop