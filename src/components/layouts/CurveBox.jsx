import React from 'react'

const CurveBox = ({text,text2}) => {
  return (
    <div className=" bg-[#212121] rounded-bl-[60px] rounded-tr-[60px] py-[20px] px-[10px] sm:py-[40px] sm:px-[100px] text-center">
        <p className='font-Barlow text-[30px] sm:text-[60px]'>{text}<span className='text-red-600 text-[60px]'>.</span></p>
        <p className='font-Oswald text-[18px]'>{text2}</p>
    </div>
  )
}

export default CurveBox
