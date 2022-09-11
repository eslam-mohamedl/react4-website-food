import React from 'react'
import { Button   } from 'react-bootstrap';
import './Ingredients.css'
import img2 from './../../assests/images/img/img-2.png';

 const Lngredients = () => {
  return (
    <section className="Lngredients">
    <div className="Container">
    <div className="row">
    <div className="col-lg-5  card">
              <div className="content ">
              <h2>
                we make everything by hand with the best possible ingredients
               </h2>
               <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                 </p>  
                <ul>
                <li className="f-flex"><i className="fa-solid fa-check"></i><p>etiam dolor diam volutpat</p></li>    
                <li className="f-flex"><i className="fa-solid fa-check"></i><p>etiam dolor diam volutpat</p></li>   
                <li className="f-flex"><i className="fa-solid fa-check"></i><p>etiam dolor diam volutpat</p></li>     

                </ul>                
               <Button className="btn btn1 " >order now</Button>
              </div>
        </div>
        <div className="col-lg-7 images ">
            <img  src={img2} alt="error"/>
            
        </div> 
    </div>
    </div>
</section>
  )
}
export default Lngredients;