import React from 'react';
import { Link } from 'react-router-dom';
import { BiDonateBlood } from 'react-icons/bi';
import { MdBloodtype } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';
import './Main.css';

function Main() {
  return (
    <div className='main'>
      <div className='main-title'>
        <h1 className='animate-charcter'>Welcome to BloodGram!</h1>
        <div className='main-title-tag'>
          <p className='title-tag'>
            Save a life and connect your lives
            <FaHandsHelping className='hands-helping' />
          </p>
        </div>
      </div>
      <div className='border-line'></div>
      <div className='main-need'>
        <p>The gift of blood is a gift to someone's life</p>
        <div className='button'>
          <a href='#take'>
            <button className='btn btn-need'>
              Need Blood
              <MdBloodtype />
            </button>
          </a>
        </div>
      </div>
      <div className='main-donate'>
        <p>There are thousands of people who are in need of blood...</p>
        <div className='button'>
          <Link to='/donate' className='Link'>
            <button className='btn btn-donate'>
              Donate Now
              <BiDonateBlood />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
