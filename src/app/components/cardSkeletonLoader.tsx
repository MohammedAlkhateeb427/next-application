import React from 'react';

const CardSkeletonLoader: React.FC = () => {
  return (
    <div className='w-72 border-teal-950 max-w-xs mx-auto overflow-hidden shadow-2xl rounded-lg animate-pulse'>
      <div className='w-full h-48 bg-zinc-300 dark:bg-zinc-800'></div>

      <div className='py-4 px-6 text-center'>
        <h2 className='w-3/4 h-4 bg-zinc-300 dark:bg-zinc-800 mb-2'></h2>
        <p className='w-1/2 h-4 bg-zinc-300 dark:bg-zinc-800 mb-2'></p>
        <p className='w-1/3 h-5 bg-zinc-300 dark:bg-zinc-800'></p>

        <div className='flex justify-center mt-2'>
          <span className='ml-2 w-4 h-4 bg-zinc-300 dark:bg-zinc-800'></span>
        </div>

        <div className='flex justify-center mt-4'>
          <div className='w-36 h-10 bg-zinc-300 dark:bg-zinc-800'></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeletonLoader;
