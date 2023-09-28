'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { User } from 'next-auth';
import { BsBoxArrowRight } from 'react-icons/bs';

type Props = {
  user: User;
};
const UserMenu = ({ user }: Props) => {
  const [control, setControl] = useState({
    isOpen: false,
  });

  return (
    <>
      <div className='flex items-center '></div>
      {user?.name && (
        <div className='flex items-center cursor-pointer'>
          <span className=' text-sm text-center font-semibold'>
            {user?.name}
          </span>
        </div>
      )}

      <div className='relative group inline-block left-2 cursor-pointer'>
        {user?.image && (
          <img
            className='h-10 w-10 rounded-full hover:text-gray-300 focus:outline-none'
            src={user?.image}
            onClick={() =>
              setControl((old) => ({ ...old, isOpen: !old.isOpen }))
            }
            alt={user?.name ?? 'Profile pic'}
          />
        )}

        {control.isOpen && (
          <Link href='/api/auth/signout'>
            <div className='absolute right-0 mt-2 bg-gray-800 text-white p-2 rounded-xl shadow-lg w-36 text-lg cursor-pointer z-20'>
              <div className='flex items-start justify-center rounded   '>
                <p className='px-2 text-sm font-semibold'>Logout</p>
                <BsBoxArrowRight className='ml-3 text-xl ' />
              </div>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default UserMenu;
