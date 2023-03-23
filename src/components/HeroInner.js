import React from 'react'
import './HeroInner.css'

function HeroInner() {
  return (
    <div className='hero-inner'>
      <div className='nav_bar'>
        <div className='item'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g transform="translate(1 3)"><path fill="currentColor" d="M20 6l-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H5.4c-.8 0-1.6.6-1.9 1.4L2 6H0v3h1v9h4v-2h12v2h4V9h1V6h-2zm-3 7H4v-1h4V9H4.2l2-6h9.7l2 6H14v3h4v1h-1z"/></g></svg>
        <p className='hero-para'>Ride with Uber</p>
        </div>
        <div className='item'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#000" d="M6 16H2v4h4v-4zM11.5 12h-4v8h4v-8zM17 8h-4v12h4V8zM22.5 4h-4v16h4V4z"/></svg>
        <p className='hero-para'>Drive or deliver</p>
        </div>
        <div className='item'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g fill="currentColor" transform="translate(.5 1)"><path fill-rule="evenodd" d="M17.91 1.41l3.17 3.17a4.834 4.834 0 010 6.84L16 16.5 6 6.5l5.08-5.09C12.03.47 13.26 0 14.5 0c1.24 0 2.47.47 3.41 1.41zM12.75 7l2.75 2.75 2.25-2.25L15 4.75 12.75 7z" clip-rule="evenodd"/><path d="M1.5 20L0 18.5l7.25-7.25 3.5 3.5L5.5 20h-4z"/></g></svg>
        <p className='hero-para'>Rent your fleet</p>
        </div>
      </div>
      <hr></hr>
      <div className='content'>
        <h3>Request a ride now</h3>
        <form>
          <div className='input-group'><input placeholder='Enter pickup location'></input></div>
          <div className='input-group'><input placeholder='Enter destination'></input></div>
        </form>
      </div>
      <div className='btns'>
        <button className='req'>Request now</button>
        <button className='sched'>Schedule for later</button>
      </div>
    </div>
  )
}

export default HeroInner