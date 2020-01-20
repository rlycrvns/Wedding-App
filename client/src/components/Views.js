import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    minHeight: 100,
    maxwidth: 800
  }
};

const Views = () => (
  <SwipeableViews className='carousel-mobile'>
    <div style={Object.assign({}, styles.slide, styles.slide0)}>
      <img
        className='slider-img'
        src='/img/slides/slide0.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <img
        className='slider-img'
        src='/img/slides/slide1.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      <img
        className='slider-img'
        src='/img/slides/slide2.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      <img
        className='slider-img'
        src='/img/slides/slide3.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide4)}>
      <img
        className='slider-img'
        src='/img/slides/slide4.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide5)}>
      <img
        className='slider-img'
        src='/img/slides/slide5.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide6)}>
      <img
        className='slider-img'
        src='/img/slides/slide6.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide7)}>
      <img
        className='slider-img'
        src='/img/slides/slide7.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide8)}>
      <img
        className='slider-img'
        src='/img/slides/slide8.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide9)}>
      <img
        className='slider-img'
        src='/img/slides/slide9.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide10)}>
      <img
        className='slider-img'
        src='/img/slides/slide10.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide11)}>
      <img
        className='slider-img'
        src='/img/slides/slide11.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide12)}>
      <img
        className='slider-img'
        src='/img/slides/slide12.jpg'
        alt='Jessica and Riley by Michelle Breiter'
      />
    </div>
  </SwipeableViews>
);

export default Views;
