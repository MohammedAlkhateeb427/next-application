'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsLaptop } from 'react-icons/bs';
import { IoSunny, IoMoon } from 'react-icons/io5';

export const ThemeMenu = () => {
  const [control, setControl] = useState({
    isOpen: false,
    mounted: false,
  });
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setControl((old) => ({ ...old, mounted: true }));
  }, []);
  if (!control.mounted) return null;
  return (
    <>
      <div className='relative group'>
        <div className='mr-2'>
          {resolvedTheme == 'light' ? (
            <IoSunny
              className='text-2xl cursor-pointer text-blue-600'
              onClick={() =>
                setControl((old) => ({ ...old, isOpen: !old.isOpen }))
              }
            />
          ) : (
            <IoMoon
              className='text-2xl cursor-pointer text-blue-800'
              onClick={() =>
                setControl((old) => ({ ...old, isOpen: !old.isOpen }))
              }
            />
          )}
        </div>

        {control.isOpen && (
          <div className='absolute right-0 mt-2 bg-gray-800 text-white p-2 rounded-xl shadow-lg w-36 text-lg cursor-pointer z-20'>
            <div
              className='flex items-center hover:bg-gray-700 rounded '
              onClick={() => {
                setControl((old) => ({ ...old, isOpen: !old.isOpen }));
                setTheme(resolvedTheme === 'light' ? 'light' : 'light');
              }}
            >
              <IoSunny className='mr-2 text-2xl' />
              <p className='px-2 py-1'>Light</p>
            </div>
            <div
              className='flex items-center hover:bg-gray-700 rounded'
              onClick={() => {
                setControl((old) => ({ ...old, isOpen: !old.isOpen }));

                setTheme(resolvedTheme === 'dark' ? 'dark' : 'dark');
              }}
            >
              <IoMoon className='mr-2 text-2xl' />
              <p className='px-2 py-1 '>Dark</p>
            </div>
            <div
              className='flex items-center hover:bg-gray-700 rounded w-32'
              onClick={() => {
                setControl((old) => ({ ...old, isOpen: !old.isOpen }));
                setTheme(resolvedTheme === 'dark' ? 'dark' : 'dark');
              }}
            >
              <BsLaptop className='mr-2 text-2xl' />
              <p className=' px-2 '>System</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
