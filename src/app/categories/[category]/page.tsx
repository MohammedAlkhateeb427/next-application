'use client';
import * as api from '../../lib/api';
import Card from '../../components/Card';
import { useState, useEffect } from 'react';
import { SelectOptions, Input, CardSkeletonLoader } from '@/app/components';
import { FaSearch } from 'react-icons/fa';
type Data = {
  price: string;
  image: any;
  title: string;
  rating: {
    count: any;
    rate: any;
  };
};
type CategoryDetailsProps = {
  params: {
    category: string;
  };
};

const CategoryDetailes: React.FC<CategoryDetailsProps> = ({ params }) => {
  const [data, setData] = useState<{ productData: Data[]; sortType: any[] }>({
    productData: [],
    sortType: [
      { key: 0, value: 'Auto' },
      { key: 1, value: 'Price from low to high' },
      { key: 2, value: 'Price from high to low' },
    ],
  });
  const [model, setModel] = useState({
    Sort_Value: 0,
  });
  const [control, setControl] = useState({
    Loading: true,
    search: '',
  });
  const categoryId = params.category;
  const fetchProductData = async () => {
    const res = await api.fetchGetSSG<Data[]>(
      `https://fakestoreapi.com/products/category/${categoryId}`
    );
    setData((old) => ({ ...old, productData: res }));
    setControl((old) => ({ ...old, Loading: false }));
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <SelectOptions
            options={data.sortType}
            label='Sort by'
            selectedKey={model.Sort_Value}
            onChange={(Sort_Value) =>
              setModel((oldModel) => ({ ...oldModel, Sort_Value: Sort_Value }))
            }
          />
        </div>
        <div className='col-span-2 mt-5'>
          <Input
            icon={FaSearch}
            classNameIcon='text-yellow-500'
            placeholder='Search...'
            onChange={(search) => {
              setControl((old) => ({ ...old, search }));
            }}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 gap-4 md:grid-cols-4 gap-4 lg:grid-cols-4 gap-4 mt-20'>
        {data.productData
          .slice()
          .sort((a, b) => {
            if (model.Sort_Value == 1) {
              return parseFloat(a.price) - parseFloat(b.price);
            } else if (model.Sort_Value == 2) {
              return parseFloat(b.price) - parseFloat(a.price);
            }
            return 0;
          })
          .filter((item) => {
            return control.search.toLowerCase() === ''
              ? item
              : item.title.toLowerCase().includes(control.search);
          })
          .map((item, index) => {
            return <Card product={item} key={index} />;
          })}
        {control.Loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CardSkeletonLoader key={index} />
            ))
          : ''}
      </div>
    </>
  );
};
export default CategoryDetailes;
