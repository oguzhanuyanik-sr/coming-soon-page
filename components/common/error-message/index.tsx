import React from 'react';

type Props = {};

const ErrorMessage = ({ message }: Props) => {
  return (
    <p className='static md:absolute italic text-red-100 text-center text-sm leading-[20px] pt-4 pb-8 pl-8'>
      {message}
    </p>
  );
};

export default ErrorMessage;
