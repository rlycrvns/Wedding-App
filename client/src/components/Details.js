import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    return (
      <div id='details'>
        <div className='strokes'></div>
        <div className='container'>
          <h1>Details</h1>
          <div className='info-body'>
            <h2>When:</h2>
            <h3>
              <span>Arrival at 5:00 PM</span>
              <span>Outdoor Ceremony at 5:30 PM</span>
              <span>Reception to Follow</span>
            </h3>
            <h2>Where:</h2>
            <h3>
              <a href='https://goo.gl/maps/fRn59sfiuLAZudhV7'>
                Scholl's Valley Lodge
              </a>
            </h3>
            <h3>
              <span>2840 SW River Road</span>
              <span>Hillsboro, OR 97123</span>
              <span>(Half hour from Downtown Portland)</span>
            </h3>
            <h2>Attire:</h2>
            <h3>Semi-Formal</h3>
            <h2>Food and Drink</h2>
            <h3>
              <span>Light Meal</span>
              <span>Beer and Wine Bar</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
