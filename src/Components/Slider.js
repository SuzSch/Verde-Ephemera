import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider({ images, interval, autoplay }) {
  const sliderStyles = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const slideStyles = {
    width: '100%',
    background: '#4e3e48c0',
    padding: '10px',
  };

  const imageStyles = {
    width: 'auto', 
    margin: '0 auto', 
    height: '500px'
  };

  return (
    <Carousel
      interval={interval}
      autoPlay={autoplay}
      showThumbs={false}
      style={sliderStyles}
      showStatus={false}
      infiniteLoop={true}
      
    >
      {images.map((image, index) => (
        <div key={index} style={slideStyles}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={imageStyles} 
          />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;

