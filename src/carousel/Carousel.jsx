import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CarouselItem from './components/Carosusel-item';
import './css/carousel.css';
import ControlGroup from './components/Control-group';
import LoaderHOC from '../HOC/LoaderHOC';
import arrow from '../assets/images/arrow.svg';
import '../App.css';
import { prevImage, nextImage } from './actions/control-group-actions';

export class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  onPrev = () => {   
    this.props.prevImage();
   }
   
   onNext = () => {
    this.props.nextImage();
   }

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
          <div 
            className="navigation-arrow-container right"
            onClick={this.onPrev}
          >
            <img className="navigation-arrow" src={arrow} alt=""/>
          </div>
          <div 
            className="navigation-arrow-container left"
            onClick={this.onNext}
          >
            <img className="navigation-arrow" src={arrow} alt=""/>
          </div>
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
  connect(mapStateToProps, {prevImage, nextImage}),
  LoaderHOC
);

export default composed(Carousel);