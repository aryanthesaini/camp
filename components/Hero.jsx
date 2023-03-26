import React from 'react';

function Hero({ heading, message }) {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img '>
      {/* overlay */}

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>
          {heading}
        </h2>
        <p className='py-5 text-l  md:text-xl lg:text-2xl'>{message}</p>
        <button className='px-12 py-2 my-4 border w-full hover:bg-red-100 hover:text-black '>
          Book your stay
        </button>
      </div>
    </div>
  );
}

export default Hero;
