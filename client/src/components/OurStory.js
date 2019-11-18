import React, { Component } from 'react';
import Slider from './Slider';

export default class OurStory extends Component {
  render() {
    return (
      <div id='ourstory'>
        <div className='container'>
          <h1>Our Story</h1>
          <Slider />
          <div className='timeline'>
            <div className='left-col'>
              <div className='col-name'>Jessica</div>
              <div className='event'>
                <div className='event-date'>May, 2014</div>
                <div className='event-info'>
                  She moved back to portland after a year living in Knoxville,
                  Tennessee
                </div>
              </div>
              <div className='event'>
                <div className='event-date'>May, 2014</div>
                <div className='event-info'>
                  She moved back to portland after a year living in Knoxville,
                  Tennessee
                </div>
              </div>
            </div>
            <div className='right-col'>
              <div className='col-name'>Riley</div>
              <div className='event'>
                <div className='event-date'>July, 2013</div>
                <div className='event-info'>
                  He packed his old Subaru to the brim and headed west to
                  Portland.
                </div>
              </div>
              <div className='event'>
                <div className='event-date'>March, 2015</div>
                <div className='event-info'>
                  He went back to school for Web Development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
