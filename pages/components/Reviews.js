import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { RiStarSFill } from 'react-icons/ri'


const Reviews = () => {

  const reviews = [
    {
      id: 1,
      name: 'Richard Hendricks',
      review: 'Outstanding coffee and exceptional service! The Corner Coffee Shop is my go-to spot for a caffeine fix. The baristas, like Rachel Bennett, are not only skilled in their craft but also incredibly friendly. The cozy ambiance and mouthwatering pastries make it the perfect place to relax and enjoy a delicious cup of Joe. Plus, their online shop, managed by Ethan Sullivan, makes it super easy to bring the Corner Coffee Shop experience home. Highly recommended!',
      company: 'LA Times'
    },
    {
      id: 2,
      name: 'Julia Torres',
      review: 'I stumbled upon this hidden gem during a trip to LA, and I was blown away! The coffee at The Corner Coffee Shop, expertly brewed by barista extraordinaire Liam Parker, is hands down the best Ive ever tasted. The attention to detail and commitment to quality are remarkable. The online shopping experience, overseen by Ava Roberts, is seamless and convenient. From their single-origin beans to their signature blends, The Corner Coffee Shop, led by the passionate owner, Sophia Anderson, is a true coffee lovers paradise.',
      company: 'Flaunt Magazine'

    },
    {
      id: 3,
      name: 'Ashley M. Smith',
      review: 'As a self-proclaimed coffee aficionado, Im always on the lookout for the perfect cup, and I found it at The Corner Coffee Shop. Emily Thompson and her team of talented baristas consistently deliver excellence in every brew. Their online store, managed by Oliver Hughes, offers a wide range of brewing accessories that have taken my coffee game to the next level. The owner, Benjamin Mitchell, has created a haven for coffee enthusiasts like myself. If youre seeking an unforgettable coffee experience, look no further than The Corner Coffee Shop.',
      company: 'Legacy Launch Pad Publishing'
    }

  ]


  return (
    <div className='flex justify-between h-[1200px]'>
        <div className='flex flex-col items-start pt-8 w-3/6 review-img bg-cover bg-center'>
          <div className='space-y-6 pl-6'>
            <h1 className='font-poppins text-8xl text-[#B2D2A4]'>Kind</h1>
            <h1 className='font-poppins text-8xl text-[#F4EBD0]'>Words From</h1>
            <h1 className='font-poppins text-8xl text-[#B68D40]'>Our Customers.</h1>
           </div>
        </div>

        <div className='flex flex-col justify-evenly w-3/6 px-8 bg-[#122620]'>
          {reviews.map((review) => (
            <div key='review.id' className='space-y-4'>
              <h1 className='font-lora text-4xl text-[#F4EBD0]'>{review.name} -</h1>
                <div className='flex items-center space-x-2'>
                  <RiStarSFill size={25} color='#B68D40'/>
                  <RiStarSFill size={25} color='#F4EBD0'/>
                  <RiStarSFill size={25} color='#B68D40'/>
                  <RiStarSFill size={25} color='#F4EBD0'/>
                  <RiStarSFill size={25} color='#B68D40'/>
                  <p className='font-lora text-[#F4EBD0] text-md pl-6'>5.0 Avg Rating</p>
                </div>
                <p className='font-poppins text-[#F4EBD0] text-md'>{review.review}</p>
                <p className='font-petit text-[#F4EBD0] text-lg'>- {review.company}</p>
                
            </div>
          ))}
        </div>
    </div>
  )
}

export default Reviews