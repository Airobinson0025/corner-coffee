import React from 'react'
import Link from 'next/link'


const Discover = () => {
  return (
    <div className='flex items-center justify-end discover-img bg-cover bg-center h-[600px]'>
        <div className='flex flex-col items-start justify-center space-y-6 bg-stone-950/80 backdrop-blur-lg h-full w-3/6 p-8'>
            <h1 className='font-petit text-5xl text-[#D6AD60] pt-6'>Discover Our Story:</h1>
            <h2 className='font-lora text-2xl text-[#B2D2A4] pt-2'>The Corner Coffee Shop Experience</h2>
            <p className='font-josefin text-[1.2rem] text-[#F4EBD0] max-w-[550px] tracking-wide'>Welcome to The Corner Coffee Shop, where exceptional coffee and genuine connections come together. Click below to delve into our story and learn more about the heart and soul behind our cozy little coffee haven. From our commitment to community engagement to our passion for crafting the perfect cup, discover what sets us apart and fuels our dedication to providing a warm and welcoming experience for each and every guest. Join us on this journey and uncover the rich blend of flavors and stories that make The Corner Coffee Shop an unforgettable destination.</p>
            <div className='flex items-center pt-4'>
               <Link href='/about' className='font-poppins text-[#D6AD60] py-2 px-4 border-2 border-[#D6AD60] hover:bg-[#D6AD60] hover:text-stone-950 rounded-sm transition duration-300 text-lg'>Learn more</Link>
            </div>
        </div>
    </div>
  )
}

export default Discover