import React from 'react';
import './HospitalApp.css';
const App = (props) => {
  return (
    <div className='hospital-ls'>
      <div className='hospital-main'>
        <div className='hospitaldiv'>
          <div className='img-hospital'>
            <img src={props.img} alt='img' />
          </div>
          <div className='content-ls'>
            <h5>Hospital Name</h5>
            <p>{props.Name}</p>
            <h5>Address</h5>
            <p>{props.Address}</p>
            <br />
            click here
            <a href={props.link} className='tag'>
              Hospital website
            </a>
            <h3>Available</h3>
          </div>
        </div>
      </div>
      <div className='hospital-main'>
        <div className='hospitaldiv'>
          <div className='img-hospital'>
            <img src={props.img} alt='img' />
          </div>
          <div className='content-ls'>
            <h5>Hospital Name</h5>
            <p>{props.Name}</p>
            <h5>Address</h5>
            <p>{props.Address}</p>
            <br />
            click here
            <a href={props.link} className='tag'>
              Hospital website
            </a>
            <h3>Available</h3>
          </div>
        </div>
      </div>
      <div className='hospital-main'>
        <div className='hospitaldiv'>
          <div className='img-hospital'>
            <img src={props.img} alt='img' />
          </div>
          <div className='content-ls'>
            <h5>Hospital Name</h5>
            <p>{props.Name}</p>
            <h5>Address</h5>
            <p>{props.Address}</p>
            <br />
            click here
            <a href={props.link} className='tag'>
              Hospital website
            </a>
            <h3>Available</h3>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default App;
