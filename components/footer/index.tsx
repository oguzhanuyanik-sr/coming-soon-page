import React from 'react';
import { socialLinks } from '@/utils/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-[72px]'>
      <section className='flex gap-6 justify-center'>
        {socialLinks.map(({ icon, url }, index) => {
          const Icon = icon;

          return (
            <div
              key={index}
              className='border border-blue-100 p-2 rounded-full text-blue-200 hover:bg-blue-200 hover:text-white-100 transition-all'
            >
              <Link href={url}>
                <Icon />
              </Link>
            </div>
          );
        })}
      </section>

      <section className='mt-[27px] text-grey-100 font-light text-sm md:text-base text-center'>
        <p>© Copyright Ping. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
