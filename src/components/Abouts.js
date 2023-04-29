import React from 'react'
import Slider from 'react-slick/lib/slider';
import './Abouts.css'
import { Our_Team } from '../data/OurTeam';
import Cards from './OurTeamData';


const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoPlay: true,
  speed: 500,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true,
        speed: 500,
        arrows: false,
        initialSlide: 0,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true,
        speed: 500,
        arrows: false,
        initialSlide: 0,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true,
        speed: 500,
        arrows: false,
        initialSlide: 0,
      }
    }
  ]
};

const Abouts = () => {
  return (
    <div className='main-about'>
      <div className='about-title'>
        Our Team
      </div>
      <div className='tn-bg-blob'></div>
      <Slider {...settings}>
        {Our_Team.map((_cards) => (
          <Cards card={_cards} />
        ))}
      </Slider>
    </div>
  )
}
export default Abouts;
