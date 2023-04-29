import React, { useState } from 'react';
import Button from './Button';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
const Form = () => {

  const navigate = useNavigate();
  const navigating = () => {
    navigate('/availableusers');
  }
  const [formData, setFormData] = useState({
    name: '',
    blood: '',
    number: '',
    city: '',
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { name, blood, number, city } = formData;

  return (
    <div className='contact' id='take'>
      <h1><span className='bd-form'>C</span>heck Your City for Blood</h1>
      <form className='contact-form'>
        <div className='contact-inside'>
          <input
            value={formData.name}
            onChange={(e) => updateFormData(e)}
            placeholder='Name'
            type='text'
            name='name'
            required
          />
          <select className='contact-select'
            value={formData.blood}
            name='blood'
            onChange={(e) => updateFormData(e)}
          >
            <option>Select Need Blood</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>
        <div className='contact-inside'>
          {/* <label>Mobile Number</label> */}
          <input
            value={formData.number}
            onChange={(e) => updateFormData(e)}
            placeholder='Enter Your Number'
            name='number'
            required
          />
          {/* <label>Area Pincode</label>
          <input
            value={pincode}
            onChange={(e) => updateFormData(e)}
            placeholder='Pincode'
            type='number'
            name='pincode'
            required
          /> */}
          {/* <label>City</label> */}
          <select className='contact-select'
            name='city'
            onChange={(e) => updateFormData(e)}
            value={formData.city}>
            <option>Select the city</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Korba</option>
            <option>Delhi</option>
            <option>Banglore</option>
            <option>Vijayawada</option>
            <option>Hyderabad</option>
            <option>gurgaon</option>
            <option>Korba</option>
            <option>Other</option>
          </select>
        </div>
      </form>
      <div className='contact-submit'>
      </div>
      <Button />
    </div>
  );
};
export default Form;
