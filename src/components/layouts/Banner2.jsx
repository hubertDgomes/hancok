import React from 'react'
import Container from '../Container'
import Images from '../Images'
import banner2 from '/src/assets/banner2.png'
import { TiTick } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CurveBox from './CurveBox';

const Banner2 = () => {
  return (
    <div className='bg-[#121212] py-[40px] sm:py-[100px]'>
      <Container className={"font-Oswald text-white"}>
        <div className="sm:w-[518px]">
            <p className='sm:text-[38px] text-[20px] text-center sm:text-left'>ABOUT THE BIGGEST HANCOK COMMUNITY</p>
        </div>
        <div className="flex sm:gap-x-[70px]">
            <div className="w-[708px] hidden sm:block">
            <Images className={""} src={banner2}/>
            </div>
            <div className="m-auto text-center sm:ml-0 sm:text-left">
                <h3 className='text-[27px] mb-[20px]'>MOST POPULAR GAMING PLATFORM.</h3>
                <p className='flex items-center text-[18px] mb-[15px]'><TiTick className='text-red-700 text-[25px]' />World Bigghest Community & Gaming Server</p>
                <p className='flex items-center text-[18px] mb-[15px]'><TiTick className='text-red-700 text-[25px]' />We Provide Gaming Accesories</p>
                <p className='flex items-center text-[18px] mb-[15px]'><TiTick className='text-red-700 text-[25px]' />Largest Online Gaming Community & Shop</p>
                <p className='flex items-center text-[18px] mb-[15px]'><TiTick className='text-red-700 text-[25px]' />Hancok reaches more than 150 million monthly users</p>
                <p className='flex items-center text-[18px] mb-[15px]'><TiTick className='text-red-700 text-[25px]' />We are leading global media brand for games</p>
            <div className="w-[467px]">
                <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo sed odio temporibus magni quia eveniet odit placeat repellat quod ipsum modi necessitatibus, dolorum officia!</p>
            </div>
            <button className='py-[10px] px-[20px] bg-[#212121] text-white flex items-center mt-[20px] cursor-pointer'>View More <MdKeyboardDoubleArrowRight className='mt-[3px] text-[25px]' /> </button>
            </div>
        </div>
        <div className="flex justify-between mt-[30px]">
            <CurveBox text={"112k"} text2={"Community Earning"}/>
            <CurveBox text={"12M"} text2={"Total Member"}/>
            <CurveBox text={"100k"} text2={"Streams Complete"}/>
            <CurveBox text={"844"} text2={"Total Sponsers"}/>
        </div>
      </Container>
    </div>
  )
}

export default Banner2
