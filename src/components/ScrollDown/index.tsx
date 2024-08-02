'use client';
import '@/styles/srollDown.css'; // Ensure the path to your custom CSS is correct

const ScrollDown = () => {
  return (
    <div className='scrolldown opacity-80 mr-10 mt-10 cursor-pointer'>
      <div className="chevrons">
        <div className='chevrondown'></div>
        <div className='chevrondown'></div>
      </div>
    </div>
  );
};

export default ScrollDown;
