'use client';

import React from 'react';
import Button from './Button';
import { BsFillCartFill } from 'react-icons/bs';
import { useCart } from '../context/CartProvider';
import Link from 'next/link';

type Props = {
  productId: any;
};
const ProductID = ({ productId }: Props) => {
  const { addToCart } = useCart();

  return (
    <>
      <div>
        <img
          src={productId.image}
          alt={productId.title}
          className='w-full h-96 rounded-lg'
        />
      </div>
      <div className='p-4 '>
        <h2 className='text-xl font-semibold'>{productId.title}</h2>
        <div className='border-b-2 border-yellow-500 mt-2'></div>
        <p className=' text-sm mt-1'>{productId.category}</p>
        <div className='border-b-2 border-yellow-500 mt-2'></div>
        <p className=' text-lg mt-2'>${productId.price}</p>
        <div className='border-b-2 border-yellow-500 mt-2'></div>
        <p className=' mt-4'>{productId.description}</p>
        <div className='border-b-2 border-yellow-500 mt-2'></div>
        <Button
          onClick={() => addToCart(productId)}
          label='Add to Cart'
          className='mt-4 sm:text-center bg-yellow-500 focus:bg-yellow-600 border-none  hover:bg-yellow-60 px-4 py-2 text-xl font-semibold'
          icon={BsFillCartFill}
        />
      </div>
    </>
  );
};
export default ProductID;
