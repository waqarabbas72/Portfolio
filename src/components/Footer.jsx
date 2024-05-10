import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className='bg-gray-100 text-center mt-10 tracking-wider font-bold flex items-center justify-around'>
       <p>REACH ME OUT</p>
        <SocialMedia
            className={`flex items-center py-4 gap-4 justify-center`}
          />
    </div>
  )
}

export default Footer