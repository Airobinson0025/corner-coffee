import React from 'react'
import Link from 'next/link'


const Discover = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-end discover-img bg-cover bg-center h-[600px] md:h-[670px] mt-80 sm:mt-0'>
        <div className='flex flex-col items-center lg:items-start justify-center space-y-6 bg-stone-950/80 backdrop-blur-lg md:h-full w-full lg:w-3/6 p-8'>
            <h1 className='font-petit text-6xl md:text-6xl text-[#D6AD60] pt-10'>Discover Our Story:</h1>
            <h2 className='font-lora text-3xl text-[#B2D2A4] pt-2'>The Corner Coffee Shop Experience</h2>
            <p className='font-josefin text-xl sm:text-[1.15rem] md:text-[1.25rem] text-[#F4EBD0] max-w-[750px] tracking-wide'>Welcome to The Corner Coffee Shop, where exceptional coffee and genuine connections come together. Click below to delve into our story and learn more about the heart and soul behind our cozy little coffee haven. From our commitment to community engagement to our passion for crafting the perfect cup, discover what sets us apart and fuels our dedication to providing a warm and welcoming experience for each and every guest. </p>
            <div className='flex items-center pt-2'>
               <Link href='/about' className='font-poppins text-[#D6AD60] py-2 px-4 border-2 border-[#D6AD60] hover:bg-[#D6AD60] hover:text-stone-950 text-lg rounded-sm transition duration-300 text-md'>Learn more</Link>
            </div>
        </div>
    </div>
  )
}

export default Discover