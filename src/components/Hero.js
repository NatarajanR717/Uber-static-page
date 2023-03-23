import React from 'react'
import BackgroundImage1 from '../assets/Rider_Home_bg_desktop2x.webp'
import HeroInner from './HeroInner';

function Hero() {
    const myStyle={
        backgroundImage:`url(${BackgroundImage1})`,
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div className='hero-container' style={myStyle}>
      <div className='inner-container'>
        <HeroInner/>
      </div>
    </div>
  )
}

export default Hero