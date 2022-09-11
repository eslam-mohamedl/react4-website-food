import React from 'react';
import Data from './../../Data';
import './Blog.css';
export const Blog = () => {
    const BlogItem = Data.map((item) =>{
        return(
            <div className="col-md-4">
                <div class="box">
                    <div className="images">
                    <img src={item.img}  alt="image3"/>
                    </div>
                    <h5>{item.title}</h5>
                    <span>Time: {item.time}</span>
                    <h6>{item.price}</h6>
                    <button className="btn">order now</button>
                </div>
            </div>
        )
    })
  return (
    <>
    <section className="Blogs">
    <div className='container'>
        <div class="row">
            {BlogItem}
        </div>
    </div>
    </section>
    </>
  )
}
