import React from 'react'
import './Business.css'
import BackgroundImage1 from '../../assets/HP-U4B-NYC-bkg.png'


function Business() {
    const myStyle={
        backgroundImage:`url(${BackgroundImage1})`,
        height:'50vh',
        backgroundPosition:'center',
        zIndex:0,
    };
  return (
    <div style={myStyle}>
        <div className='business-content'>
        <h3>Uber for Business</h3>
        <p>Transform the way your company moves and feeds its people.</p>
        <button>see How</button>
        </div>
    </div>
  )
}

export default Business