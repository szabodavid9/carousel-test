import React from 'react';
import '../css/control-group.css';

const ControlGroup = () => {
  return (
    <div className="carousel__control-group">
      <button className="carousel__control-group--button left" type="button">Prev</button>
      <button className="carousel__control-group--button right" type="button">Next</button>
    </div>
  );
};

export default ControlGroup;