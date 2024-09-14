import React from 'react';

type MessageProps = {
  message: string;
};

function ProgramsUnavailable({ message }: MessageProps) {
  return (
    <div className='w-full h-[20vh] md:h-[30vh] flex justify-center items-center bg-transparent'>
      <h1 className='font-extrabold text-2xl md:text-3xl text-[#f1f1f1] font-cinzel mx-auto'>{message}</h1>
    </div>
  );
}

export default ProgramsUnavailable;
