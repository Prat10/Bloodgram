import React from 'react';
import './Donaters.css';
import Slider from 'react-slick';
import { Test_Data } from '../components/OurTeamData/test_data';
import { test } from '../data/testmonial';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


const Donaters = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoPlay: true,
    speed: 500,
    arrows: false,
    initialSlide: 0,
    // className: "slider variable-width",
    //  variableWidth: true,
  };
  return (

    <div className='test'>
      <h1 className='userreview'> Kaisa h dost</h1>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        {test.map((value, index) => {
          return (
            <Test_Data
              pic={value.pic}
              name={value.name}
              review={value.review}
            />
          );
        })}
      </Slider>
    </div>
  );

}

export default Donaters