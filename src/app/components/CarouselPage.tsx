'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface Imagees {
  images: string[];
}
const CarouselPage: React.FC<Imagees> = ({ images }) => {
  return (
    <>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        width='100%'
        className='carousel-item  shadow-xl'
      >
        {images.map((image, index) => (
          <div key={index} className='carousel-item '>
            <img src={image} alt={`Image ${index}`} className='rounded-3xl' />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselPage;
