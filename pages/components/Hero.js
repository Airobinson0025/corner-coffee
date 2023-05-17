import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center text-center custom-img bg-cover bg-top h-[700px]'>
      <div className=' space-y-72 lg:pt-24'>
        <h1 className='hidden sm:inline font-petit text-[3.25rem] md:text-[4rem] text-[#B68D40] mx-6'>The Corner Coffee Shop</h1>
        <p className='font-poppins text-2xl text-[#F4EBD0] tracking-wider pt-60 sm:pt-2'>Where every sip feels like home.</p>
      </div>
    </div>
  )
}

export default Hero