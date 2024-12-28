import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-pink-400 bg-[#CC2B52] text-[#faf7f7]'> 
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className=''>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#faf7f7]'></p>
                <p className='font-medium text-sm md:text-base'>Our Best Seller</p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-wm md:text-base'>Shop Now</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#faf7f7]'></p>
            </div>
        </div>
      </div>
      {/* hero rightside */}
<img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero
