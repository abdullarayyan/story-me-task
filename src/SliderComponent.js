import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SliderComponent({ imageData }) {
  return (
    <div className="slider-container">
      <Carousel autoPlay infiniteLoop interval={5000}>
        {imageData.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderComponent;
