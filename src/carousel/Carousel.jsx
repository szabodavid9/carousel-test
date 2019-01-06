import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarouselItem from './components/Carosusel-item';
import './css/carousel.css';
import ControlGroup from './components/Control-group';
import { fetchImages } from './actions/carousel-actions';

const NUMER_OF_VIEWS = 5;

class Carousel extends Component {
  componentDidMount(){
    this.props.fetchImages();
  }

  generateIndexArray = () => {
    const {images, offset} = this.props;
    var indexes = [];

    for (let i=offset; i<NUMER_OF_VIEWS + offset; i = i + 1) {
      var index = null;
      if (i > images.length-1) {
        index = i-images.length;
      } else if ( i < 0 ) {
        index = images.length+i
      } else {
        index = i;
      }
      indexes = [...indexes, index];
    };
    return indexes;
  };

  generateVisableImages = () => {
    const { images } = this.props;
    const indexes = this.generateIndexArray();
    const visableImages = indexes.map(indexe => images[indexe]);

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
  const { images, offset } = state.carousel;
  return { images, offset };
}

export default connect(mapStateToProps, { fetchImages })(Carousel);