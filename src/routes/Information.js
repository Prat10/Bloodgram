import React,{useEffect} from 'react';
import './Information.css';
import A from '../assets/366-3668869_blood-group-blood-and-blood-donation-a-drop.png';
import B from '../assets/b-blood.png';
import O from '../assets/0-blood.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Information() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='informs'>
     <div className='inform-img'>
       <div className='img-inside'>
       <h1>GLOBAL NEED</h1>
       <p>In the Developed world, we take for granted<br/> that blood will be there for us if and<br/> when we need it</p>
        <div className='blood-thought'><h2>"Blood is thicker than water,but loyalty is thicker than blood"</h2></div>
       </div>
     </div>
    <div className='main-tips'>
      <h1>Tips</h1>
      <h2>Here are some tips to put your mind at ease during the <br/> blood donation process</h2>
      <div className='subtip'>
      <div className='tips'data-aos="fade-right"
      data-aos-duration="2000">
        <h2>The day before</h2>
        <ul>
          <li>Have an iron-rich diet such as beans, spinach or meat, poultry.</li>
          <li>Have a proper sleep of at least 8 hours.</li>
          <li>Include more liquids in your diet</li>
        </ul>
      </div>
      <div className='tips'data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">
      <h2>On the Donation day</h2>
      <ul>
          <li>Do carry your identify identification forms e.g.<br/> driver’s license</li>
          <li>Drink 2 cups of water before donating blood</li>
          <li>Wear a half sleeve shirt so that you can easily roll it <br/>up avoid fast food before donation</li>
        </ul>
      </div>
      <div className='tips'data-aos="fade-left"
      data-aos-duration="2000">
      <h2>After the Donation</h2>
      <ul>
          <li>Reward yourself with a snack as refreshment immediately.</li>
          <li>Drink more liquids over a period of 24 hour</li>
          <li>Remove the bandage after few hours</li>
        </ul>
      </div>
      </div>
    </div>
      <h1 className='h1-blood'>Facts About Blood and Blood Types</h1>
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
              <h1><span>B</span> Group</h1>
              <img className='ab-blood' src={B} />
            </div>
            <div className="back-inform">
             <ul>
                <li>It has only the B antigen on red cells</li>
                <li>A antibody in the plasma</li>
             </ul>
            </div>
          </div>
        </div>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1><span>AB</span> Group</h1>
              <img className='ab-bloods' src="https://cdn.pixabay.com/photo/2017/08/22/11/56/blood-group-2668697_1280.png"/>
            </div>
            <div className="back-inform">
            <ul>
                <li>It has both A and B antigens on red cells</li>
                <li>Neither or nor antibody in the <br/>plasma</li>
             </ul>
            </div>
          </div>
        </div>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1><span>A</span> Group</h1>
              <img className='ab-blood' src={A} />
            </div>
            <div className="back-inform">
            <ul>
                <li>It has only the A antigen on red cells</li>
                <li>B antibody in the plasma</li>
             </ul>
            </div>
          </div>
        </div>
        <div className="inform-card-wrapper">
          <div className="single-card">
            <div className="front-inform">
              <h1><span>O</span> Group</h1>
              <img className='ab-blood' src={O} />
            </div>
            <div className="back-inform">
            <ul>
                <li>It has Neither or nor antigens on red cells</li>
                <li>A and B antibody in the plasma</li>
             </ul>
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
        <div className='blood-trans'>
        <img src="https://im3.ezgif.com/tmp/ezgif-3-ef1532785b.gif" alt="transfusionimg" />
        </div>
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