import React from 'react';
import Abouts from './Abouts';
import './Aboutwork.css'
import pic from "../assets/blood2.jpeg"

const Aboutwork = () => {
  return (
    <div className='aboutmainpara'>
      <h1 className='bloodp'>BloodGram</h1>
      <div className='bloodgramheading'>
        <div>
          <img src={pic} alt='img' className='aboutimg' width={300}/> 
        </div>
        <div className='content-for-about'>
          <p className='aboutpara'>Bloodgram is a platform which is doing extremely noble deed in getting blood to the needy.
            We envision that every person receives blood as soon as possible no matter where they are.
            We're building a virtual army of  blood donation volunteers who could be traced and
            contact by family/ those in need of blood.</p>
        </div>
        
      </div>
      <a href="/form" className='aboutcontact'> Contact Us</a>
      <div className='vission-mission'>
        <div className='vission'>
          <h1> Our vission</h1>
          <p>Our vision is to create a world where every individual understands the importance of blood donation and actively participates in saving lives. We envision a society where blood donation is easily accessible, and no life is lost due to the unavailability of blood.</p>
        </div>
        <div className='mission'>
          <h1> Our Mission</h1>
          <p>Our mission is to establish a comprehensive blood donation website that serves as a platform connecting blood donors, recipients, and blood banks. We aim to promote awareness about blood donation, streamline the donation process.

.</p>
        </div>
      </div >
      <div className='About-uper'>
        <Abouts />
      </div>
    </div>
  )
}
export default Aboutwork;