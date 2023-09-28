import * as api from './lib/api';
import Card from './components/Card';
import CarouselPage from './components/CarouselPage';
import Link from 'next/link';
import { FaTshirt, FaFemale, FaGem, FaMobile } from 'react-icons/fa';

type Data = {
  id: number;
  price: any;
  image: string;
  title: string;
  rating: {
    count: any;
    rate: any;
  };
};
const Home = async () => {
  const resProducts = await api.fetchGetSSG<Data[]>(
    'https://fakestoreapi.com/products'
  );
  const resCategories = await api.fetchGetSSG<string[]>(
    'https://fakestoreapi.com/products/categories'
  );
  return (
    <>
      <CarouselPage images={resProducts?.map((item) => item.image)} />
      <p className='md:text-start mt-10 sm:text-center lg:text-start font-semibold'>
        Select Categories
      </p>
      <div className=' flex flex-row  justify-center gap-8 mt-4'>
        {resCategories.map((item) => {
          return (
            <>
              <div className='w-[85px]  border-teal-950 overflow-hidden shadow-2xl rounded-lg hover:shadow-3xl transition duration-300 transform hover:-translate-y-2 dark:shadow-dark '>
                <Link href={`/categories/${item}`}>
                  <div className=' flex justify-center mt-3'>
                    {item === "men's clothing" ? (
                      <FaTshirt className='text-[30px]' />
                    ) : item === "women's clothing" ? (
                      <FaFemale className='text-[30px]' />
                    ) : item === 'jewelery' ? (
                      <FaGem className='text-[30px]' />
                    ) : (
                      <FaMobile className='text-[30px]' />
                    )}
                  </div>
                  <div className=' text-center mt-3'>
                    <p className='font-semibold text-md  text-center'>{item}</p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <p className='md:text-start mt-10 sm:text-center lg:text-start font-semibold'>
        Most Popular
      </p>
      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 gap-4 md:grid-cols-4 gap-4 lg:grid-cols-4 gap-4 '>
        {resProducts?.map((prud, index) => {
          return (
            <>
              <Card product={prud} key={index} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
