import React, { Component } from 'react';
import './loader.css';

const LoaderHOC = (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render(){
      return this.props.loading 
      ? <div className="loader-container"><div className="lds-hourglass"></div></div>
      : <WrappedComponent { ...this.props }/>
    }
  };
}

export default LoaderHOC;