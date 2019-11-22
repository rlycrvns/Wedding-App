import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    minHeight: 100,
    maxwidth: 800 
  }
};

const Views = () => (
  <SwipeableViews className="carousel-mobile">
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
    <img className="slider-img" src="/img/slides/slide1.jpg" alt="Jessica and Riley by Michelle Breiter"/>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
    <img className="slider-img" src="/img/slides/slide2.jpg" alt="Jessica and Riley by Michelle Breiter"/>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
    <img className="slider-img" src="/img/slides/slide3.jpg" alt="Jessica and Riley by Michelle Breiter"/>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
    <img className="slider-img" src="/img/slides/slide4.jpg" alt="Jessica and Riley by Michelle Breiter"/>
    </div>
  </SwipeableViews>
);

export default Views;