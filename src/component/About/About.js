import React from 'react'
import img1 from './../../assests/images/img/img-1.png';
import { Button   } from 'react-bootstrap';

import './About.css';
export const About = () => {
  return (
    <section className="About">
    <div className="Container">
    <div className="row">
    <div className="col-lg-7 images ">
              <img src={img1} alt="img1" />
            </div> 
    <div className="col-lg-5  card">
              <div className="box-content ">
              <h2>
                we pride ourselves on making real food from the best ingrediends 
               </h2>
               <p className="lead">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
</p>                  <Button className="btn btn1" >Learn More</Button>
              </div>
        </div>
       
    </div>
    </div>
</section>
  )
}
