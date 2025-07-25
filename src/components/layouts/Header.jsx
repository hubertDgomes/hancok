import React from 'react'
import Images from '../Images'
import logo from '/src/assets/logo.png'
import Container from '../Container'
import earth from '/src/assets/globe.png'
import sign from '/src/assets/sign-out-alt.png'
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className="bg-black py-[40px]">
       <Container>
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[50px]">
                <Images src={logo}/>
                <ul className='flex gap-x-[35px] text-white font-Oswald'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About us</li>
                    <li className='cursor-pointer'>Tornament</li>
                    <li className='cursor-pointer'>Store</li>
                    <li className='cursor-pointer'>Team</li>
                    <li className='cursor-pointer'>FAQ</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>
            </div>
            <div className="flex items-center text-white font-Oswald justify-between gap-x-[6px]">
                <Images src={earth}/>
                <div className="flex items-center mb-[6px]">
                    <Images className={"w-[18px]"} src={sign}/>
                    <p className='text-[16px]'>Sign In</p>
                </div>
                <div className="">
                    <IoSearchSharp className='' />
                </div>
            </div>
        </div>
       </Container>
    </div>
  )
}

export default Header
