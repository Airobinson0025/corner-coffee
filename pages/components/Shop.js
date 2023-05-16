import React from 'react'
import { IoLeafOutline } from 'react-icons/io5'
import { WiStars } from 'react-icons/wi'
import Link from 'next/link'

const Shop = () => {
  return (
    <div className='flex flex-col bg-[#B68D40]'>
        <div className='flex flex-col justify-center my-16 mx-16 space-y-3 p-6 rounded-sm banner-img bg-fixed bg-cover bg-left h-[450px]'>
            <h1 className='font-lora text-[2.45rem] text-[#F4EBD0]'>Coffee at Your Convenience.</h1>
            <p className='font-poppins text-[1.45rem] text-[#F4EBD0]'>Pick Up, Delivery, or Visit Us</p>
            <div className='pt-4'>
               <Link href='/menu' className='font-poppins text-[1.35rem] text-[#F4EBD0] py-1 px-4 border-2 border-[#F4EBD0] rounded-sm hover:bg-[#F4EBD0] hover:text-stone-950 transition duration-300 '>Menu</Link>
            </div>
        </div>

        <section className='flex flex-col items-center justify-evenly h-[900px] bg-stone-950'>
            <div className='flex items-center space-x-3'>
                <WiStars size={50} color='#B68D40'/>
                <h1 className='font-lora text-[#F4EBD0] text-6xl'>Shop</h1>
                <WiStars size={50} color='#B68D40'/>
            </div>
            <div className='flex items-center justify-evenly space-x-8'>
               <div className='flex items-center justify-center w-[350px] h-[600px] shop-img bg-cover bg-center rounded-md hover:scale-105 transitoin duration-200'>
                   <h1 className='font-josefin text-[3rem] text-stone-200'>Coffee</h1>
               </div>
               <div className='flex items-center justify-center w-[350px] h-[600px] bg-cover bg-center rounded-md shop-img-2 hover:scale-105 transitoin duration-200'>
                   <h1 className='font-josefin text-[3rem] text-stone-200'>Pastries</h1>
               </div>
               <div className='flex items-center justify-center w-[350px] h-[600px] shop-img-3 bg-cover bg-center rounded-md hover:scale-105 transitoin duration-200'>
                   <h1 className='font-josefin text-[3rem] text-stone-200'>Mugs & Cups</h1>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Shop