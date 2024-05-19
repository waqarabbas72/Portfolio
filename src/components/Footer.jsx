import React from 'react'
import SocialMedia from './SocialMedia'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-100 text-center mt-10 tracking-wider font-bold flex items-center justify-around'>
       <p className='flex items-center gap-5'>REACH ME OUT <FaArrowAltCircleRight className='w-6 h-6' /></p>
        <SocialMedia
            className={`flex items-center py-4 gap-4 justify-center`}
          />
    </div>
  )
}

export default Footer