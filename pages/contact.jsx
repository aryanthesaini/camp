import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => {
  return (
    <div>
      <Hero
        heading='Contact'
        message='Submit the form below and we will reach out'
      />
      <Contact />
    </div>
  );
};

export default contact;
