'use client';

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartProvider';
import { Button } from '../components';
import { BsFillTrashFill } from 'react-icons/bs';
import Link from 'next/link';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [control, setControl] = useState({
    total: 0,
  });

  useEffect(() => {
    setControl((old) => ({
      ...old,
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    }));
  }, [cart]);
  return (
    <>
      <div className='flex flex-col bg-zinc-100 dark:bg-zinc-900 rounded-lg mt-4'>
        {cart.map((product) => {
          return (
            cart.length > 0 && (
              <div key={product.id} className='flex items-center mt-4'>
                <img
                  src={product.image}
                  alt='Product Image'
                  className='h-16 w-24 ml-10'
                />
                <div className='flex flex-col flex-grow  text-center md:text-start ml-5'>
                  <h2 className='text-sm font-semibold '>{product.title}</h2>
                  <h2 className='text-sm font-semibold '>{product.category}</h2>
                  <h2 className='text-sm font-semibold '>${product.price}</h2>
                </div>
                <div className='flex items-center border w-22 h-10 rounded-lg md:mr-4'>
                  <Button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity - 1)
                    }
                    className='mr-1 px-2 py-1'
                    label='-'
                  />
                  <Button className='mr-1 px-2 py-1' label={product.quantity} />
                  <Button
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
                    className='mr-1 px-2 py-1'
                    label='+'
                  />
                </div>
                <div className='flex items-center text-center text-red-500 md:mr-4 sm:pl-2'>
                  <Button
                    icon={BsFillTrashFill}
                    onClick={() => removeFromCart(product.id)}
                  />
                </div>
              </div>
            )
          );
        })}
        {cart.length > 0 && (
          <div className='text-center mt-5 rounded shadow-xl font-semibold'>
            <h1 className='mb-2'>Total is : ${control.total.toFixed(2)}</h1>
          </div>
        )}
      </div>
      <div className='flex justify-center'>
        <Link href={'/checkout'}>
          {cart.length > 0 && (
            <Button
              label='Checkout'
              className=' bg-yellow-500 focus:bg-yellow-600 border-none  hover:bg-yellow-60 px-4 py-2 text-xl mt-4  text-white font-semibold'
              labelClassName='font-semibold'
            />
          )}
        </Link>
      </div>
      {cart.length <= 0 && (
        <div className=' flex justify-center mt-10 rounded-lg shadow-lg p-8 bg-zinc-100 dark:bg-zinc-900'>
          <div className=''>
            <p className='text-xl text-center'>Your shopping cart is empty.</p>
            <p className='text-center text-gray-500 mt-4'>
              Explore our products and start shopping!
            </p>
            <div className='flex justify-center mt-6'>
              <Link
                href='/categories '
                className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition duration-300'
              >
                Go to our products
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
