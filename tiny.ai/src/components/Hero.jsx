import React from 'react';
import heroimg from '../images/sapiens.png';
const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
      <h1 className="title">
            Making the Web Tiny For You!
        </h1>
        <img src={heroimg} className="hero-image"/>
      </div>
       
        <h2 className="title-2">Increase your Web Application's perrformance using Tiny.ai</h2>
    </div>
  )
}

export default Hero