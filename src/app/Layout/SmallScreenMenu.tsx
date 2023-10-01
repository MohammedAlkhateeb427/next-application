'use client';

import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ThemeMenu } from './ThemeMenu';
import { BsFillCartFill } from 'react-icons/bs';
import CartDropdown from './CartDropdown';

export const SmallScreenMenu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [control, setControl] = useState({
    isOpen: false,
  });
  return (
    <>
      <div className='relative group'>
        <BsThreeDotsVertical
          onClick={() => setControl((old) => ({ ...old, isOpen: !old.isOpen }))}
          className='cursor-pointer text-lg'
        />
        {control.isOpen && (
          <div className='border absolute right-0 mt-2 bg-white dark:bg-zinc-900  p-2 rounded-xl shadow-lg w-56 text-lg cursor-pointer '>
            <div className='flex items-center justify-center rounded mr-4'>
              {children}
            </div>
            <div className='border-b mt-2 '></div>
            <div className='flex items-start justify-center rounded mt-3 ml-5 '>
              <p className=' px-2 text-sm font-semibold'>Switch theme</p>
              <ThemeMenu />
            </div>
            <div className='border-b mt-2 '></div>
            <div className='flex items-center justify-center rounded ml-5 mt-2'>
              <p className=' px-2 px-2 text-sm font-semibold'>Check Cart</p>
              <CartDropdown />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SmallScreenMenu;
