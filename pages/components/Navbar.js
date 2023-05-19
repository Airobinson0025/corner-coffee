import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TiWeatherSunny } from 'react-icons/ti'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    

    const [ color , setColor ] = useState('transparent');
    const [ menu, setMenu ] = useState(false);

    const openMenu = () => {
        setMenu(!menu)
    }

    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.2
            }
        }
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 15) {
                setColor('#0c0a09')
            } else {
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='flex justify-between items-center fixed w-full p-5 sm:p-3 ease-in duration-200 z-10'>
        
        <div className='flex items-center space-x-8'>
           <Link href='/' className='font-poppins text-3xl sm:text-xl text-[#F4EBD0]'>The Corner</Link>
            <div className='flex items-center space-x-3'>
               <TiWeatherSunny size={32} color='#F4EBD0' className='hidden lg:inline'/>
               <p className='hidden lg:inline font-poppins text-md text-[#F4EBD0]'>63°F</p>
               <p className='hidden lg:inline font-poppins text-md text-[#F4EBD0]'>Los Angeles, CA</p>
             </div>
        </div>


        <nav className='hidden sm:inline ml-4'>
            <ul className='flex items-center space-x-10 font-poppins text-lg text-[#F4EBD0]'>
                <li>
                    <Link href='/menu'>Menu</Link>
                </li>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li>
                    <Link href='about'>About</Link>
                </li>
                <li className='py-2 px-4 border-2 border-[#F4EBD0] rounded-sm hover:bg-[#F4EBD0] hover:text-[#122620] transition duration-300'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

        <div onClick={openMenu} className='sm:hidden'>
            <AiOutlineMenu size={35} color='F4EBD0'/>
        </div>

        {/* mobile menu */}

        <AnimatePresence >
        {
            menu && ( 
            <motion.div 
            variants={item}
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: '100vh'}}
            transition={{duration:.3}}
            exit='exit'
            className='sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center font-poppins text-center text-4xl text-[#F4EBD0] w-full h-screen bg-[#122620]'>
                <div onClick={openMenu} className='absolute top-5 right-5'>
                    <AiOutlineClose size={35} color='F4EBD0' />
                </div>



            <ul className='space-y-12 pt-48'>
               <li>
                    <Link href='/menu'>Menu</Link>
                </li>
                <li>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li>
                    <Link href='/about'>About Us</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
                <p className='font-lora text-lg pt-24'>Developed By Aaron Robinson</p>
                <p className='font-lora text-lg'>Copyright 2023 ©</p>
            </ul>
        </motion.div> )}
        </AnimatePresence>
    </div>
  )
}

export default Navbar