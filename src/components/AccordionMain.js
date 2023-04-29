import React from 'react';
import { GrDown } from 'react-icons/gr';
import { BsChevronUp } from 'react-icons/bs'

export default function Main({ title, info }) {
  const [checkTrue, setCheckTrue] = React.useState(false);
  return (
    <div className='ac-main'>
      <div className='title-button'>
        <h3 className='title'>{title}</h3>
        <button className='acbtn' onClick={() => setCheckTrue(!checkTrue)}>
          {checkTrue ? <BsChevronUp /> : <GrDown />}
        </button>
      </div>
      {checkTrue && <p className='info'>{info}</p>}
    </div>
  );
}
