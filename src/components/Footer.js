import React from 'react';
import './Footer.css';
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { MdExpandLess } from 'react-icons/md'
import { IoWater } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='footer-approach'>
      <div className='footer-outer'>
        <div className='footer-list-div'>
          <div className='foot-about'>
            <p><span>About Us</span></p>
            <ul>
              <li>
                <a href="/login"> About Us</a>
              </li>
              <li>
                <a href="/login"> How It Works</a>
              </li>
              <li>
                <a href="/login"> Team</a>
              </li>

            </ul>
          </div>
          <div className='footer-about'>
            <p><span>Contact us</span></p>
            <ul>
              <li>
                <a href="/login"> Contact Us</a>
              </li>
              <li>
                <a href="mailto:hello@bloodgram.com"> Bloodgram@gmail</a>
              </li>
              <li>
                <a href="/login"> 78908181819</a>
              </li>

            </ul>
          </div>
          <div className='footer-about'>
            <p> <span>Resources</span></p>
            <ul>
              <li>
                <a href="/login"> Help center</a>
              </li>
              <li>
                <a href="login"> terms & Privacy</a>
              </li>


            </ul>
          </div>
        </div>
      </div>
      <div className='footer-social'>
        <ul>
          <li>
            <TiSocialFacebook className='footer-socail-logo' />
            <AiOutlineTwitter className='footer-socail-logo' />
            <TiSocialLinkedin className='footer-socail-logo' />
          </li>
        </ul>
      </div>
      <a href='#' className='scroolicon'><MdExpandLess /> </a>
      <div className='footer-copyright'>
        <h1> Save Life <IoWater className='logo-drop' /></h1>
        <p>
          Copyright &copy; 2022 by Bloodgram, Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer