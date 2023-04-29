import React from 'react';
import Hospitalset from './Hospitalset';
import App from './HospitalApp';

const Final = () => {
  return (
    <div className='ha-final'>
      {Hospitalset.map((value, index) => {
        return (
          <App
            img={value.img}
            Name={value.Name}
            Address={value.Address}
            link={value.link}
          />
        );
      })}
    </div>
  );
};

export default Final;
