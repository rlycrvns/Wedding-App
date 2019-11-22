import React, { Component } from 'react';
import Slider from './Slider';
import Views from './Views';

export default class OurStory extends Component {
  render() {
    return (
      <div id='ourstory'>
        <div className='container'>
          <h1>Our Story</h1>
          <Slider />
          <Views />
          <div className='timeline'></div>
        </div>
      </div>
    );
  }
}
