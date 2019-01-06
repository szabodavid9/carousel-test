import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarouselItem from './components/Carosusel-item';
import './css/carousel.css';
import ControlGroup from './components/Control-group';
import { fetchImages } from './actions/carousel-actions';

class Carousel extends Component {
  componentDidMount(){
    this.props.fetchImages();
  }
  render() {
    const { images } = this.props;
    const firstImages = images && images.slice(0,5); 
    return (
      <div>
        <h1 className="carousel__title"> Carousel Test </h1>
        <div className="carousel-container">
          {
            firstImages && firstImages.map(image => (
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
  const { images } = state.carousel;
  return { images };
}

export default connect(mapStateToProps, { fetchImages })(Carousel);