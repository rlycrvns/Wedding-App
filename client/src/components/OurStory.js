import React, { Component } from 'react';
import Slider from './Slider';

export default class OurStory extends Component {
  render() {
    return (
      <div id='ourstory'>
        <div className='container'>
          <h1>Our Story</h1>
          <Slider />
          <div className='timeline'></div>
        </div>
      </div>
    );
  }
}
