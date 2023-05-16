import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TiWeatherSunny } from 'react-icons/ti'
import { ImCart } from 'react-icons/im'

const Navbar = () => {

    const [ color , setColor ] = useState('transparent')

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 25) {
                setColor('#0c0a09')
            } else {
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='flex justify-between items-center fixed w-full p-4 ease-in duration-200 z-10'>
        
        <div className='flex items-center space-x-8'>
           <Link href='/' className='font-poppins text-xl text-[#F4EBD0]'>The Corner Coffee</Link>
            <div className='flex items-center space-x-3'>
               <TiWeatherSunny size={32} color='#F4EBD0'/>
               <p className='font-poppins text-md text-[#F4EBD0]'>63°F</p>
               <p className='font-poppins text-md text-[#F4EBD0]'>Los Angeles, CA</p>
             </div>
        </div>


        <nav>
            <ul className='flex items-center space-x-10 font-poppins text-lg text-[#F4EBD0]'>
                <li>
                    <Link href='/menu'>Menu</Link>
                </li>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li>
                    <Link href='about'>About Us</Link>
                </li>
                <li>
                    <Link href='/cart'>
                        <ImCart size={20} color='#F4EBD0'/>
                    </Link>
                </li>
                <li className='py-2 px-6 border-2 border-[#F4EBD0] rounded-sm hover:bg-[#F4EBD0] hover:text-[#122620] transition duration-300'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar