'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const RepoPage = () => {
  const params = useParams();
  return (
    <div className='max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto m-2'>
      <div className='px-4 py-2'>
        <h2 className='text-xl font-semibold text-gray-800'>{params.name}</h2>
        <p className='text-gray-600 mt-2'>{params.description}</p>
      </div>
    </div>
  );
};

export default RepoPage;
