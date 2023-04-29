import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import List_of_user_set from './List_of_user_set';
import App from './App';

const final = () => {
  return (
    <>
      <div><h1 className='resultsearch'>Available Donars nearby you </h1>
        <img className='loaduser' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
      </div>
      <div className='index_div'>
        {List_of_user_set.map((value, index) => {
          return (
            <App
              img={value.img}
              name={value.name}
              location={value.location}
              phone={value.phone}
              blood={value.blood}
            />
          );
        })}
        {/* <div className='goto'>
        <h3>Search for Blood Bank </h3>
        <Link to='hospitals'>Click Here</Link>
      </div> */}
        <Outlet />
      </div>
    </>
  );
};

export default final;