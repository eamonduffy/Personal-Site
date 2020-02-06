import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

// Pictures
import me from '../img/meProfile.PNG';
import pic2 from '../img/2.jpg';
import pic3 from '../img/3.jpg';
import pic4 from '../img/4.jpg';

const imgFit = {
  display: 'block',
  backgroundSize: 'contain',
  maxWidth: '95%',
  maxHeight: '80vh',
  height: '30%',
  margin: '15px',
  // marginTop: '50%',
  // marginBottom: '50%',
  // marginLeft: '10px',
  // paddingLeft: '10px',
  borderRadius: '5px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
};

const ImgStyled = styled.img`
  display: block;
  max-width: 95%;
  height: 90vh;
  margin: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

  @media (max-width: 1600px) {
    height: 80vh;
  }
`;

export default function ImgCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <CarImg className="d-block w-100"></CarImg> */}
        <ImgStyled className="d-block w-100" src={pic2}></ImgStyled>
        {/* <img
          className="d-block w-100"
          src={pic2}
          alt="First slide"
          style={imgFit}
        /> */}
      </Carousel.Item>
      <Carousel.Item>
        <ImgStyled className="d-block w-100" src={pic3}></ImgStyled>
        {/* <img
          className="d-block w-100"
          src={pic3}
          alt="Second slide"
          style={imgFit}
        /> */}
      </Carousel.Item>
      <Carousel.Item>
        <ImgStyled className="d-block w-100" src={pic4}></ImgStyled>
        {/* <img
          className="d-block w-100"
          src={pic4}
          alt="Third slide"
          style={imgFit}
        /> */}
      </Carousel.Item>
    </Carousel>
  );
}
