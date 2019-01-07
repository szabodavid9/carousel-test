import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from "./carousel/Carousel";
import './App.css';
import { fetchImages } from './carousel/actions/carousel-actions';

class App extends Component {

  componentDidMount(){
    this.props.fetchImages();
  }

  render() {
    return (
      <div className="App">
        <Carousel/>
      </div>
    );
  }
}

export default  connect(null, { fetchImages })(App);
