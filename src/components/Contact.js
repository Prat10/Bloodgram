import React, { useState,useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import user_data from '../../src/redirect/List_of_user_set';
import FilterUsers from '../../src/redirect/App'

const Form = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [users, setUsers] = React.useState([])

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
  
  // const handleClick = async (e) => {
  //   e.preventDefault();
    
  // };

  const filterItems = (event) => {
    event.preventDefault();
    console.log(formData)
    const newItems = user_data.filter((item) => item.blood === formData.blood);
    setUsers(newItems);
    navigating()
  };

  const dataElements = users.map((el) => {
    return <FilterUsers key={el.id} data={el} />;
  });



  return (
    <div className='contact' id='take'>
      <h1>
        <span className='bd-form'>C</span>heck Your City for Blood</h1>
      <form className='contact-form' onSubmit={filterItems}>
        <div className='contact-inside'
        data-aos-duration="2000" data-aos="fade-down-right" >
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
        <div className='contact-inside' data-aos="fade-down-left"
        data-aos-duration="2000" >
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
        <button className='contact-submit' type='submit' >Check Blood</button>
        {/* <div className='contact-submit'>
        <button onClick={handleClick}>Check Blood</button>

      </div> */}
      </form>
      

      
    </div>
  );
};
export default Form;
