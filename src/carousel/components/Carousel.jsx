import React from 'react';
import CarouselItem from './Carosusel-item';
import '../css/carousel.css';
import ControlGroup from './Control-group';

const Carousel = () => (
  <div>
    <h1 className="carousel__title"> Carousel Test </h1>
    <div className="carousel-container">
      <CarouselItem/>
      <CarouselItem/>
      <CarouselItem/>
      <CarouselItem/>
      <CarouselItem/>
    </div>
    <ControlGroup/>
  </div>
);

export default Carousel;