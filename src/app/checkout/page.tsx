'use client';

import { useState, useEffect } from 'react';
import { Input, RadioInput, Button } from '../components';
import { FaCcVisa } from 'react-icons/fa';
import { useCart } from '../context/CartProvider';
import Link from 'next/link';
import { schema } from './zodChema';
import { z } from 'zod';

const initialData: CreditCardValue = {
  cardNumber: '',
  cardName: '',
  cardExpiry: '',
  cardCVC: '',
  paymentOption: true,
};
type CreditCardValue = z.infer<typeof schema>;

const Payment: React.FC = () => {
  const { cart } = useCart();

  const [model, setModel] = useState<CreditCardValue>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [control, setControl] = useState({
    subTotal: 0,
    delivery: 5,
  });
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      schema.parse(model);
      setErrors({});
      alert('Success');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };
  useEffect(() => {
    setControl((old) => ({
      ...old,
      subTotal: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    }));
  }, [cart]);
  return (
    <>
      {cart.length <= 0 ? (
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
      ) : (
        <div className='container mx-auto p-2'>
          <h1 className='text-2xl font-semibold mb-4'>Payment</h1>
          <div className='text-lg'>
            <label className='block font-medium'>
              Sub Total : ${control.subTotal.toFixed(2)}
            </label>
            <label className='block font-medium'>
              delivery : ${cart.length > 0 ? control.delivery : 0}
            </label>
            <label className='block font-medium'>
              Total amount : ${' '}
              {cart.length > 0 ? control.subTotal + control.delivery : 0}
            </label>
          </div>
          <div className='mb-4 mt-2 '>
            <label className='block font-medium'>Select Payment Method:</label>

            <div className='flex space-x-4'>
              <RadioInput
                htmlFor='cardPayment'
                id='cardPayment'
                label='Credit Card'
                name='card'
                checked={model.paymentOption}
                value={model.paymentOption}
                onChange={() => {
                  setModel((old) => ({
                    ...old,
                    paymentOption: !old.paymentOption,
                  }));
                }}
              />

              <RadioInput
                htmlFor='cashPayment'
                id='cashPayment'
                label='Cash'
                name='model.cash'
                checked={!model.paymentOption}
                value={!model.paymentOption}
                onChange={() => {
                  setModel((old) => ({
                    ...old,
                    paymentOption: !old.paymentOption,
                  }));
                }}
              />
            </div>
          </div>

          {model.paymentOption && (
            <div className='max-w-md flex justify-start flex-col space-y-1  '>
              <div>
                <Input
                  icon={FaCcVisa}
                  classNameIcon='text-blue-600'
                  label='Card Number'
                  placeholder='0000 0000 0000 0000'
                  value={model.cardNumber}
                  onChange={(cardNumber) => {
                    setModel((old) => ({ ...old, cardNumber: cardNumber }));
                  }}
                />
                {errors.cardNumber && (
                  <div className='text-red-500'>{errors.cardNumber}</div>
                )}
              </div>
              <div>
                <Input
                  icon={FaCcVisa}
                  classNameIcon='text-blue-600'
                  label='Cardholder Name'
                  placeholder='Cardholder Name'
                  value={model.cardName}
                  onChange={(cardNumbernew) => {
                    setModel((old) => ({ ...old, cardName: cardNumbernew }));
                  }}
                />
                {errors.cardName && (
                  <div className='text-red-500'>{errors.cardName}</div>
                )}
              </div>
              <div className='flex space-x-4'>
                <div className='flex-1'>
                  <Input
                    icon={FaCcVisa}
                    classNameIcon='text-blue-600'
                    placeholder='MM/YY'
                    label='Expiry Date'
                    value={model.cardExpiry}
                    onChange={(cardExpiryNew) => {
                      setModel((old) => ({
                        ...old,
                        cardExpiry: cardExpiryNew,
                      }));
                    }}
                  />
                  {errors.cardName && (
                    <div className='text-red-500'>{errors.cardName}</div>
                  )}
                </div>
                <div className='flex-1'>
                  <Input
                    icon={FaCcVisa}
                    classNameIcon='text-blue-600'
                    placeholder='CVC'
                    label='CVC'
                    value={model.cardCVC}
                    onChange={(cardCVCNew) => {
                      setModel((old) => ({ ...old, cardCVC: cardCVCNew }));
                    }}
                  />
                  {errors.cardCVC && (
                    <div className='text-red-500'>{errors.cardCVC}</div>
                  )}
                </div>
              </div>
            </div>
          )}
          <Button
            label='Process Payment'
            className=' bg-yellow-500 focus:bg-yellow-600 border-none  hover:bg-yellow-60 px-4 py-2 text-xl text-white font-semibold'
            onClick={handleSubmit}
          />
        </div>
      )}
    </>
  );
};

export default Payment;
