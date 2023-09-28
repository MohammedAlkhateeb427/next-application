import React from 'react';
import * as api from '../lib/api';
import Link from 'next/link';
import electronics from '../../../public/images/electronics .jpg';
import jewelery from '../../../public/images/jewelery.jpg';
import menClothing from '../../../public/images/mensClothing.jpg';
import womenClothing from '../../../public/images/womenClothing.jpg';
import Image from 'next/image';

const Categories = async () => {
  const res = await api.fetchGetSSG<string[]>(
    'https://fakestoreapi.com/products/categories'
  );

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-2'>
        {res.map((item) => {
          return (
            <>
              <Link href={`/categories/${item}`}>
                {' '}
                <div className=' flex flex-col items-center p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
                  <div className='relative w-full h-64'>
                    <>
                      <Image
                        src={
                          item === "men's clothing"
                            ? menClothing
                            : item === "women's clothing"
                            ? womenClothing
                            : item === 'jewelery'
                            ? jewelery
                            : electronics
                        }
                        alt={item}
                        className='w-full h-full bg-cover rounded-xl'
                      />
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <p className='text-center font-semibold text-white bg-black bg-opacity-75 p-2 rounded-md'>
                          {item}
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
