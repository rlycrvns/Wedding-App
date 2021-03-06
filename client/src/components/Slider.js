import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const items = [
  {
    src: '/img/slides/slide0.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide1.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide2.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide3.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide4.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide5.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide6.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide7.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide8.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide9.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide10.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide11.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  },
  {
    src: '/img/slides/slide12.jpg',
    altText: 'Jessica and Riley by Michelle Breiter'
  }
];

const Slider = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
