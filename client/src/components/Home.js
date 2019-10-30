import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div id='home'>
        <div className='hero-img'>
          <img
            src='./img/hero.jpg'
            alt='Jessic and Riley by Michelle Breiter'
          />
        </div>
        <div className='heading container'>
          <h1>
            <span className='h1Top'>Jessica Baron</span>
            <span className='plus-span'>&#43;</span>
            <span className='h1Bottom'>Riley Cravens</span>
          </h1>
        </div>
        <div className='index-info container'>
          <div className='info'>
            <h2>
              <span>September 6, 2020</span>
              <span>Portland, Oregon </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}