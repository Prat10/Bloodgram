import React from 'react'
import './Form.css';

import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Form = () => {
    return (
        <div className='Contactus'>

            <div className='contactusform'>
                <h1>Contact Us Form</h1>
                <div className='inputdiv'>
                    <input type="text" placeholder="Name" required ></input>
                    <input type="text" placeholder="Email"  ></input>
                </div>
                <div className='inputdiv'>
                    <input type="text" placeholder="Phone" required ></input>
                    <input type="text" placeholder="Address" required ></input>
                </div>

                <input type="text" placeholder="Subject" className='secondinput'></input>
                <input type="text" placeholder="Message" className='secondinput1' required></input>
                <button className='sendmessage'>Send Message</button>
            </div>
            <div className='contactinfo'>
                <h1> Contact Info</h1>

                <div className='iconflex'>
                    <div className='formicon3'>
                        <p><MdOutlineAlternateEmail className='formicon' /></p>
                    </div>
                    <div>
                        <p> E-Mail</p>
                        <p>Bloodgram@gmail.com</p>
                    </div>
                </div>
                <div className='iconflex'>
                    <div className='formicon3'>
                        <p><BsTelephoneFill className='formicon' /></p>
                    </div>
                    <div>
                        <p> Phone</p>
                        <p>36238476375486</p>
                    </div>
                </div>
                <div className='iconflex'>
                    <div className='formicon3'>
                        <p><MdLocationPin className='formicon' /></p>
                    </div>
                    <div>
                        <p> Website</p>
                        <p>BloodGram.com</p>
                    </div>
                </div>
                <div className='iconflex'>
                    <div className='formicon3'>
                        <p> <HiOutlineLocationMarker className='formicon' /></p>
                    </div>
                    <div>
                        <p> Address</p>
                        <p>Kalipure ,West Bengal</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Form;