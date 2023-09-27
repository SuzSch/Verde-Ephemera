import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider({ images, interval, autoplay }) {
  return (
    <Carousel interval={interval} autoPlay={autoplay}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
