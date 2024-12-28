import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.iconic} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta odit iste. Architecto fuga accusantium aliquam maiores illo voluptatum rem?
            </p>
        </div>
        <div>
            <p className='text-xl  font-medium mb-5 text-[#740938]'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivary</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p  className='text-xl font-medium mb-5 text-[#740938]'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 365-768-9787</li>
                <li>contact@iconicattire.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ iconicattire.com- All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
