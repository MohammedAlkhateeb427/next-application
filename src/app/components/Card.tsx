'use client';

import React from 'react';
import Button from './Button';
import { BsFillCartFill } from 'react-icons/bs';
import { useCart } from '../context/CartProvider';
import Link from 'next/link';

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='w-72 border-teal-950 max-w-xs mx-auto overflow-hidden shadow-2xl rounded-lg hover:shadow-3xl transition duration-300 transform hover:-translate-y-2 dark:shadow-dark '>
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className='w-full h-48 object-cover'
          />
        </Link>

        <div className='py-4 px-6 text-center'>
          <h2 className='text-sm font-semibold h-16'>{product.title}</h2>
          <p className=' text-sm '>{product.category}</p>
          <p className=' text-md mt-3'>${product.price}</p>

          <div className='flex justify-center  '>
            {[...Array(product.rating)].map((_, index) => (
              <svg
                key={index}
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 fill-current text-yellow-500'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 2a1 1 0 01.777.372l2.752 3.531 4.821.73a1 1 0 01.555 1.705l-3.667 3.563.865 5.049a1 1 0 01-.453 1.039 1 1 0 01-1.183-.183L10 14.12l-4.293 2.26a1 1 0 01-1.183.183 1 1 0 01-.453-1.04l.865-5.048-3.667-3.563a1 1 0 01.555-1.705l4.82-.73 2.752-3.53A1 1 0 0110 2z'
                  clipRule='evenodd'
                />
              </svg>
            ))}
            <span className=''>{product.rate}</span>
          </div>
          <div className='flex justify-center mt-4'>
            {' '}
            <Button
              label='Add to Cart'
              className=' bg-yellow-500 focus:bg-yellow-600 border-none  hover:bg-yellow-60 px-4 py-2 text-xl font-semibold'
              icon={BsFillCartFill}
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
