import React from 'react';
import Abouts from './Abouts';
import './Aboutwork.css'
import pic from "../assets/blood2.jpeg"

const Aboutwork = () => {
  return (
    <div className='aboutmainpara'>
      <h1 className='bloodp'> BloodGram</h1>
      <div className='bloodgramheading'>
        <div>
          <img src={pic} alt='img' className='aboutimg' width={300} />
        </div>
        <div className='content-for-about'>
          <p className='aboutpara'>Bloodgram is a platform which is doing extremely noble deed in getting blood to the needy.
            We envision that every person receives blood as soon as possible no matter where they are.
            We're building a virtual army of  blood donation volunteers who could be traced and
            contact by family/ those in need of blood.</p>
          <a href="/form" className='aboutcontact'> Contact Us</a>
        </div>
      </div>
      <div className='vission-mission'>
        <div className='vission'>
          <h1> Our vission</h1>
          <p>Our mission is to ensure that all vulnerable people are protected as best as we can, as a relief foundation.</p>
        </div>
        <div className='mission'>
          <h1> Our Mission</h1>
          <p> We envision that every person receives blood as soon as possible no matter where they are.</p>
        </div>
      </div >
      <div className='About-uper'>
        <Abouts />
      </div>
    </div>
  )
}
export default Aboutwork;