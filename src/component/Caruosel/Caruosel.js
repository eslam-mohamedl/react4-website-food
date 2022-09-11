import React from 'react'
import './Caruosel.css';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './../../assests/images/review/2.jpg';
import img1 from './../../assests/images/review/1.jpg';


 const Caruosel = () => {
  return (
     <>
     <div className="Carousel-box">
        <Carousel>
      <Carousel.Item>
        <img src={img1} alt="First slide"/>
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <h3>web design</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2}  alt="Second slide"  />

        <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <h3>logo design</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1}     alt="Third slide" />

        <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <h3>web design</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
     </>
  )
}
export default Caruosel;