import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-[20%] px-8 absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <p className='text-xl font-bold text-white mb-4'>{title}</p>
      <p className='w-1/3 text-white mb-4'>{overview}</p>
      <button className=' px-8 bg-white text-black h-8 rounded-md my-4 text-sm hover:opacity-80'>Play</button>
      <button className=' px-8 bg-gray-500 text-center h-8 rounded-md opacity-50 my-4 text-sm mx-2'>More Info</button>
    </div>
  )
}

export default VideoTitle
