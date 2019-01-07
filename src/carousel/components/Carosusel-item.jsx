import React from 'react';
import '../css/carousel-item.css';

const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item__container">
      <img className="carousel-item__images" src={image.webformatURL} alt=""/>
      <h2 className="carousel-item__title">{image.tags}</h2>
    </div>
  );
};

export default CarouselItem;