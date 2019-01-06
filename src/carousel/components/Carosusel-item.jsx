import React from 'react';
import '../css/carousel-item.css';

const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item__container">
      <img className="carousel-item__images" src={image.webformatURL} alt=""/>
    </div>
  );
};

export default CarouselItem;