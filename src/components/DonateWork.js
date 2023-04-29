import React from 'react';
import './DonateWork.css';
import {
  BsFillDropletFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';
const DonateWork = (props) => {
  return (
    <div class='request-ls'>

      <div className='donatemain'>
        <div class='doante-content'>
          <form className='donate-form'>
            <label className='donate-level'>
              <h3>Name </h3> <p>{props.name}</p>
            </label>
            <div className='img-section'>
              <img src={props.img} alt='img' className='donate-img'></img>
            </div>
            <br />
            <label className='donate-level'>
              <h3>
                <BsFillTelephoneFill className='donate-icon' />
                Phone Number
              </h3>
              <p>{props.phone}</p>
            </label>

            <br />
            <label className='donate-level'>
              <h3>
                <BsFillDropletFill className='donate-icon' /> Blood Group
              </h3>
              <p>{props.type}</p>
            </label>

            <br />
            <label className='donate-level'>
              <h3>
                <BsFillGeoAltFill className='donate-icon' />
                Address
              </h3>{' '}
              <p>{props.address}</p>
            </label>

            <br />
            <div className='donate-r'>
              <br />
              <h3> Disease</h3>
              <br />
              <label for='contactChoice1'>Yes</label>

              <input
                type='radio'
                id='contactChoice2'
                name='contact'
                value='yes'
              />
              <label for='contactChoice2'>No</label>

              <input type='radio' id='contactChoice3' name='contact' value='No' />
            </div>
            <input type='textarea' className='messagebox' placeholder='Message' />
            <button className='Donate-btn'>Donate Now </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateWork;