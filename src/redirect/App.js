import './App.css';
import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi'
import {
  BsFillDropletFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';

const App = (props) => {
  console.log(props)
  // const [show, setshow] = useState(false);
  return (
    <div className='user-main'>
      <div className='sub_main'>
        <div className='list-img-div'>
          <img src={props.img} alt='img' className='list-img' />
          <h2 className='syn-list'>Available</h2>
        </div>
        <div className='list-div2'>
          <div className='list-div2-inner'>
            <div> <h5><BiUser className='list-icon' />Name-</h5></div>
            <div> <p>{props.name} </p></div>
          </div>
          <div className='list-div2-inner'>
            <div>
              <h5>
                <BsFillGeoAltFill className='list-icon' />
                Location-
              </h5>
            </div>
            <div className='ava-list-location'> <p> {props.location} </p></div>
          </div>
          <div className='list-div2-inner'>
            <div><h5>
              <BsFillTelephoneFill className='list-icon' />
              Contact Number-
            </h5></div>
            <div> <p>{props.phone}</p></div>
          </div>
          <div className='list-div2-inner'>
            <div> <h5>
              <BsFillDropletFill className='list-icon' />
              Blood type-
            </h5></div>
            <div><p>{props.blood}</p></div>

          </div>


        </div>


        {/* ) : null} */}
        {/* <button
            type='submit'
            className='list-btn'
            onClick={() => setshow(!show)}
          >
            CLICK
          </button>{' '} */}



      </div>

      <div className='available_user_btn'>
        <a href='#' >CALL</a>
      </div>
    </div>
  );
};

export default App;