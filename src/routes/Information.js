import React from 'react';
import './Information.css';
// import '../components/DonateWork';
// // import Navbar from '../components/Navbar';
// import DonateWork from '../components/DonateWork';
// // import Footer from '../components/Footer';
// import DonateDataSet from '../components/DonateDataSet';

function Information() {
  return (
    <div className='informs'>
      <h1>Facts About Blood and Blood Types</h1>
      <div className='inform-header'>
        <p>
          Blood types are determined by the presence or absence of certain antigens –
          substances that can trigger an immune response if
          they are foreign to the body.  Since some antigens can trigger a patient's immune system to attack the transfused blood, safe blood transfusions depend on careful blood typing and cross-matching.
          <span>Do you know what blood type is safe for you if you need a transfusion?</span>
        </p>
      </div>
      {/* <img src="https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-blood-group-vector-icons-isolated-on-white-png-image_6533096.png" alt="bloodgropsimg" /> */}
      <div className="inform-body">
        <p>There are four major blood groups determined by the presence or absence of two antigens, A and B, on the surface of red blood cells. In addition to the A and B antigens, there is a protein called the Rh factor, which can be either present (+) or absent (–), creating the 8 most common blood types (A+, A-,  B+, B-,  O+, O-,  AB+, AB-).</p>
      </div>
      <div className='main-inform-card'>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1>Group</h1>
              <img src='https://www.seekpng.com/png/full/364-3648208_blood-group-0-rh-factor-positive-blood-a.png' />
            </div>
            <div className="back-inform">
              <p>has only the A antigen on red
                cells (and B antibody in the
                plasma)</p>
            </div>
          </div>
        </div>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1>Group</h1>
              <img src='https://www.seekpng.com/png/full/364-3648208_blood-group-0-rh-factor-positive-blood-a.png' />
            </div>
            <div className="back-inform">
              <h1>B+</h1>
            </div>
          </div>
        </div>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1>Group</h1>
              <img src='https://www.seekpng.com/png/full/364-3648208_blood-group-0-rh-factor-positive-blood-a.png' />
            </div>
            <div className="back-inform">
              <p>has only the A antigen on red
                cells (and B antibody in the
                plasma)</p>
            </div>
          </div>
        </div>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1>Group</h1>
              <img src='https://www.seekpng.com/png/full/364-3648208_blood-group-0-rh-factor-positive-blood-a.png' />
            </div>
            <div className="back-inform">
              <h1>B+</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blood-in-con">
        <h1>Blood Types and Transfusion</h1>
        <p>There are very specific ways in which blood types must be matched for a safe transfusion. The right blood transfusion can mean the difference between life and death. Use the interactive graphic below to learn more about matching blood types for transfusions.
          Also, Rh-negative blood is given to Rh-negative patients, and Rh-positive or Rh-negative blood may be given to Rh-positive patients. The rules for plasma are the reverse.</p>
        <ul>
          <li>The universal red cell donor has Type O negative blood.</li>
          <li>The universal plasma donor has Type AB blood.</li>
        </ul>
        
        <img src="https://nibts.hscni.net/wp-content/uploads/2017/06/bloodgroups-to-groups-768x522.png" alt="transfusionimg" />
      </div>
      <div className="take-part-donation">
        <h2>Take Your Step To Bright Others Life</h2>
        <button>Donate Now</button>
      </div>
    </div>
  );
}

export default Information;








{/* {DonateDataSet.map((value, index) => {
  return (
    <DonateWork
      img={value.img}
      name={value.name}
      address={value.address}
      phone={value.phone}
      type={value.type}
    />
  );
})} */}