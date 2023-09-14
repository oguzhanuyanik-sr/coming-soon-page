'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../common/error-message';

export type FormValueTypes = {
  email: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('Email is required'),
});

const defaultValues = {
  email: '',
};

const Form = () => {
  const form = useForm<FormValueTypes>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValueTypes) => {
    alert(`Thanks for subscribing! ❤️\n\n${data.email} ✔️`);
  };

  return (
    <main className='w-full flex justify-center '>
      <div className='w-full max-w-[640px]'>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col md:flex-row md:justify-between md:items-center md:mt-10'
        >
          <div className='relative w-full md:w-[65%]'>
            <input
              type='email'
              {...register('email')}
              placeholder='Your email address...'
              className='w-full mt-8 outline-none border border-blue-100 rounded-[28px] py-[14px] pl-8 placeholder:text-blue-100 md:m-0'
            />
            <ErrorMessage message={errors.email?.message as string} />
          </div>
          <button
            type='submit'
            className='w-full md:w-[30%] bg-blue-200 text-white-100 rounded-[28px] py-[14px] hover:opacity-80 transition-all flex justify-center items-center'
          >
            Notify Me
          </button>
        </form>

        <section className='mt-[72px] w-full'>
          <Image
            src='/illustration-dashboard.png'
            alt='Dashboard'
            height={285}
            width={180}
            sizes='100%'
            className='w-full'
          />
        </section>
      </div>
    </main>
  );
};

export default Form;
