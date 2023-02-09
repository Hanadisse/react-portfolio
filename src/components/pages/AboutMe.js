
import React from 'react';


export default function AboutMe() {
  return (
    <div>
      <div className='homePg-header' >

        <h2 >About Me</h2>
      </div>
      <div className="container">
      <div className="card col imgCard" >
          <div className="card-img">
            <div className='meImgContainer'>
          
            </div>
          </div>
        </div>
        <div className="card col" >
          <div className="card-body">
            <h5 className="card-title">Education</h5>
            <p className="card-text">I am currently a student at University Of Minnesota Full-Stack Web Development Bootcamp. I was attending at inver hills community college for a econ transfer pathway to the U of MN. I graduate in Febuary 2023 to obtain a full stack developer certificate.</p>
            <div className='imgContainer'>
  
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Career Path</h5>
            <p className="card-text"> I was working towards on obtaining a econimics degree and pursue a career somehwere with it. Eventually, I changed my career path and wanted to do something with tech. </p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Right Now</h5>
            <p className="card-text"> I'm currently still in the process of being a better web developer and soon hope to msater skills that helps me be a great full stack web developer.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
}