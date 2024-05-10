import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-300 text-center p-3 tracking-wider font-bold'>
       <p>Reach Me Out</p>
        <SocialMedia
            className={`flex items-center py-4 gap-4 justify-center`}
          />
    </div>
  )
}

export default Footer