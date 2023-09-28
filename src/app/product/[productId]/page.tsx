import React from 'react';
import * as api from '../../lib/api';
import ProductID from '../../components/ProductId';
type Data = {
  id: number;
  price: string;
  category: string;
  image: string;
  title: string;
  description: string;
};
type ProductDetailsProps = {
  params: {
    productId: number;
  };
};
const ProductId: React.FC<ProductDetailsProps> = async ({ params }) => {
  const ProductId = params.productId;
  const res = await api.fetchGetSSG<Data>(
    `https://fakestoreapi.com/products/${ProductId}`
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <ProductID productId={res} />
    </div>
  );
};
export default ProductId;
