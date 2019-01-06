import React from 'react';
import { connect } from 'react-redux';
import '../css/control-group.css';
import { prevImage, nextImage } from '../actions/control-group-actions';

const ControlGroup = (props) => {
  const onPrev = () => {   
   props.prevImage();
  }
  
  const onNext = () => {
    props.nextImage();
  }

  return (
    <div className="carousel__control-group">
      <button
        onClick={onPrev}
        className="carousel__control-group--button left" 
        type="button">
        Prev
      </button>
      <button
        onClick={onNext} 
        className="carousel__control-group--button right" 
        type="button">
        Next
      </button>
    </div>
  );
};

export default connect(null, { prevImage, nextImage })(ControlGroup);
