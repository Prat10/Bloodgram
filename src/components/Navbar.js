import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoWater } from "react-icons/io5";
import './Navbar.css';
import Footer from './Footer';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const CloseIcon = () => <AiOutlineClose size={30} />;
const MenuIcon = () => <AiOutlineMenu size={30} />;
const Navbar = () => {
  const [ismobile, setIsmobile] = useState(false);
  const toggleMenu = () => setIsmobile(!ismobile);
  return (
    <>
      <nav className='nav'>
        <NavLink to='/'>
          <svg
            id='logo-14'
            width='73'
            height='49'
            viewBox='0 0 73 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z'
              fill=' rgb(253 164 175)'
            ></path>
            <path
              d='M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z'
              fill='#FF7917'
            ></path>
            <path
              d='M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z'
              fill='#5D2C02'
            ></path>
          </svg>
        </NavLink>
        <div>
          <ul className={ismobile ? 'navbar-mobile' : 'navbar'}>
            <li>
              <NavLink to='home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='donate'>Information</NavLink>
            </li>
            <li>
              <NavLink to='reviews'>Our Reviews</NavLink>
            </li>
            <li>
              <NavLink to='aboutus'>About us</NavLink>
            </li>
            <li>
              <NavLink to='availableusers'>Available Donors</NavLink>
            </li>
            <li className='phone'>
              Save Life <IoWater className='logo-dp' />
            </li>
          </ul>
        </div>
        <NavLink to='login' className='login-link'>
          <button className='login-btn'>Login</button>
        </NavLink>
        <div className='mobile' onClick={toggleMenu}>
          {ismobile ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
