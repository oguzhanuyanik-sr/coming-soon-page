import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='w-full'>
      <section className='w-full flex justify-center mt-20 mb-8'>
        <Image
          src='/logo.svg'
          alt='Logo'
          height={24}
          width={56}
          sizes='100%'
          className='w-full max-w-[90px]'
        />
      </section>

      <section className='text-center'>
        <h1 className='text-grey-100 font-ligh text-[22px] leading-8 md:text-5xl md:leading-[60px] mb-[15px]'>
          We are launching
          <span className='text-grey-200 font-bold'> soon!</span>
        </h1>
        <p className='text-grey-200 font-light text-sm md:text-xl'>
          Subscribe and get notified
        </p>
      </section>
    </header>
  );
};

export default Header;
