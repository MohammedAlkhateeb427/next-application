'use client';

import { useState } from 'react';
import { useCart } from '../context/CartProvider';
import Link from 'next/link';
import Button from '../components/Button';
import { BsFillTrashFill, BsFillCartFill } from 'react-icons/bs';
import Image from 'next/image';
const CartDropdown = () => {
  const [control, setControl] = useState({
    isCartOpen: false,
  });
  //Context api
  const { cart, removeFromCart } = useCart();

  return (
    <div className='relative inline-block text-center'>
      <Button
        className='pt-5'
        onClick={() =>
          setControl((old) => ({ ...old, isCartOpen: !old.isCartOpen }))
        }
      >
        <BsFillCartFill className='absolute text-xl ml-2 ' />
      </Button>
      <Button
        onClick={() =>
          setControl((old) => ({ ...old, isCartOpen: !old.isCartOpen }))
        }
      >
        <span className='ml-7 bg-red-500 text-white rounded-full px-2 py-1 text-xs '>
          {cart.length}
        </span>
      </Button>
      {control.isCartOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-gray-100 text-yellow-600 rounded-lg shadow-lg'>
          <ul>
            {cart.length > 0 ? (
              <>
                <div className='origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-zinc-100 ring-1 ring-black ring-opacity-5'>
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className='flex p-2 border-b border-gray-300'
                    >
                      <div className='mr-2 mt-1'>
                        <Image
                          unoptimized
                          src={product.image}
                          alt='Product Image'
                          className='w-6 h-6'
                          width={0}
                          height={0}
                          priority={true}
                        />
                      </div>
                      <div className='flex-grow'>
                        <div className='text-xs font-semibold'>
                          {product.category}
                        </div>
                        <div className='text-xs text-gray-600'>
                          ${product.price}
                        </div>
                      </div>
                      <div className='flex flex-col items-end'>
                        <Button
                          icon={BsFillTrashFill}
                          className=' text-red-500'
                          onClick={() => {
                            removeFromCart(product.id);
                            setControl((old) => ({
                              ...old,
                              isCartOpen: false,
                            }));
                          }}
                        />
                        <Link
                          href={'/cart'}
                          onClick={() =>
                            setControl((old) => ({
                              ...old,
                              isCartOpen: false,
                            }))
                          }
                        >
                          <Button
                            label='Go to cart'
                            className='  text-sm text-sky-700 text-sm'
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <li className='p-2 border-b border-gray-200'>Cart Is Empty!</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
