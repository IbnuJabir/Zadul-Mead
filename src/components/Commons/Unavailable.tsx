import React from 'react'

type MessageProps = {
  message: string;
};

function Unavailable({ message }: MessageProps) {
  return (
    <div className='w-full h-[60vh] flex justify-center items-center bg-transparent'>
        <h1 className='font-extrabold text-2xl md:text-4xl text-gray-400 font-cinzel'>{message}</h1>
    </div>
  )
}

export default Unavailable