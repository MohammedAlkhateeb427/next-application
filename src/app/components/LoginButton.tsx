'use client';

import React from 'react';
import Button from './Button';
import { signIn } from 'next-auth/react';

export const LoginButton = () => {
  return (
    <Button
      onClick={() => signIn()}
      label='Login'
      className=' bg-yellow-400 focus:bg-yellow-600 border-none  hover:bg-yellow-60 px-3 py-1 text-xl text-white font-semibold'
      labelClassName='font-semibold'
    />
  );
};
export default LoginButton;
