import React from 'react'
import './Home.css';
import { Button   } from 'react-bootstrap';

export const Home = () => {
  return (
    <section className="Home">
        <div className="Container">
        <div className="row">
        <div className="col-lg-5  card">
                  <div className="content ">
                  <h2>
                    Good Food Choices are good investments
                   </h2>
                   <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
</p>                  <Button className="btn btn1" >order now</Button>
<Button className="btn btn2" >learn more</Button>
                  </div>
            </div>
            <div className="col-lg-7 images ">
                
            </div> 
        </div>
        </div>
    </section>
  )
}
