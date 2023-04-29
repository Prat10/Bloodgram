import React from 'react';
import '../components/DonateWork';
// import Navbar from '../components/Navbar';
import DonateWork from '../components/DonateWork';
// import Footer from '../components/Footer';
import DonateDataSet from '../components/DonateDataSet';

function Donate() {
  return (
    <div>
      <div classname='request'>Requested list of users for you</div>
      {DonateDataSet.map((value, index) => {
        return (
          <DonateWork
            img={value.img}
            name={value.name}
            address={value.address}
            phone={value.phone}
            type={value.type}
          />
        );
      })}
    </div>
  );
}

export default Donate;