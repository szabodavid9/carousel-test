import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarouselItem from './components/Carosusel-item';
import './css/carousel.css';
import ControlGroup from './components/Control-group';
import LoaderHOC from '../HOC/LoaderHOC';

class Carousel extends Component {
 
  generateVisableImages = () => {
    const { images, indexArray } = this.props;
    const visableImages = indexArray.map(itemIndex => images[itemIndex]);
    
    return visableImages;
  }

  render() {
    const { images } = this.props;
    const visableImages = images && this.generateVisableImages() || [];

    return (
      <div>
        <h1 className="carousel__title"> Carousel Test </h1>
        <div className="carousel-container">
          {
           visableImages.map(image => (
              <CarouselItem key={image.id} image={image}/>
            ))
          }
        </div>
        <ControlGroup/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { images, indexArray, loading } = state.carousel;
  return { images, indexArray, loading };
}

const composed = compose(
  connect(mapStateToProps, null),
  LoaderHOC
);

export default composed(Carousel);