import React from 'react';
import IgImg1 from '../public/1.jpg';
import IgImg2 from '../public/2.jpg';
import IgImg3 from '../public/3.jpg';
import IgImg4 from '../public/4.jpg';
import IgImg5 from '../public/5.jpg';
import IgImg6 from '../public/6.jpg';
import Instagramimg from './Instagramimg';

function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow us on Instagram</p>
      <p className='py-4 text-emerald-900'>@abcdef</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <Instagramimg socialImg={IgImg1} />
        <Instagramimg socialImg={IgImg2} />
        <Instagramimg socialImg={IgImg3} />
        <Instagramimg socialImg={IgImg4} />
        <Instagramimg socialImg={IgImg5} />
        <Instagramimg socialImg={IgImg6} />
      </div>
      <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>About Us</p>

        <div className='gap-2 p-4 my-12 mx-12'>
          The Nature Nest ganges offers best camps, cottage resort in Rishikesh,
          ganges at reasonable price. Book a stay with us for unforgettable
          Nature experience. The Nature Nest ganges amongst the best cottages in
          Rishikesh, proffers and unparalleled, Luxury Rereat on the banks of
          river ganges in Rishkesh, Bairagarh.
        </div>
      </div>
    </div>
  );
}

export default Instagram;
