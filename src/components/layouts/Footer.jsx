import React from 'react'
import Container from '../Container'

const Footer = () => {
    return (
        <>
        <div className="bg-[#191919] py-[30px]">
                <Container>
                        <div className="bg-[#FF4655] py-[15px] md:py-[30px] px-[15px] md:px-[20px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                                <p className='uppercase font-Barlow font-semibold text-[24px] md:text-[40px] text-white md:w-[720px] text-center md:text-left'>
                                        subscribe us to get latest news in your inbox from hancok community
                                </p>
                                <div className="flex relative w-full md:w-auto">
                                        <input 
                                                className='w-full md:w-auto pl-[20px] h-[50px] pr-[120px] md:pr-[300px] bg-white rounded-[50px] placeholder:text-black focus:outline-0 font-Barlow' 
                                                placeholder='YOUR EMAIL'
                                        />
                                        <button className='bg-black h-[50px] px-[20px] text-white rounded-[50px] absolute right-0'>
                                                SUBSCRIBE
                                        </button>
                                </div>
                        </div>
                </Container>
        </div>
        </>
    )
}

export default Footer
