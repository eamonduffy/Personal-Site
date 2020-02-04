import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Pictures
import me from '../img/meProfile.PNG';
import pic2 from '../img/2.jpg';
import pic3 from '../img/3.jpg';
import pic4 from '../img/4.jpg';

const imgFit = {
  maxWidth: '95%',
  maxHeight: '80vh',
  margin: '15px',
  // paddingLeft: '10px',
  borderRadius: '5px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
};

export default function ImgCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
          style={imgFit}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Second slide"
          style={imgFit}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4}
          alt="Third slide"
          style={imgFit}
        />
      </Carousel.Item>
    </Carousel>
  );
}
