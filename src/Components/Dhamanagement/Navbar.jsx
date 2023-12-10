import React, { useState } from 'react';
import './Navbar.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export const Navbar = () => {
  const [isActive, setIsActive]= useState(false);
  return (
    <div>
    <nav className='navbar'>
        <div className='navbar_logo'>
        <img src={Weblogo} alt="logo" />
        </div>

        <ul className='nav_links'>
            <li className='list_item'>Dooper At Home</li>
            <li className='list_item'>Lab Tesst </li>
            <li className='list_item'>Our Network < FaCaretDown/></li>
            <li className='list_item'>About Us</li>
            <li className='list_item'>Contact Us</li>
            <li className='list_item'>Join Us With <FaCaretDown/></li>
            
            <li className='list_item_1'>
    
              <div className='dropdown_btn' onClick={(e)=> setIsActive(!isActive)}>Hospital Name
              <FaCaretDown/>
              </div>
              {isActive &&(
              <div className='dropdown_content'>
                <Link to={"/dhamanagement"} className='dropdown_nav_link'>
                <div className='dropdown_item'>Dha Management</div>
                </Link>
                <Link to="/doctormanagement" className='dropdown_nav_link'>
                <div className='dropdown_item'>Doctor Management</div>
                </Link>
                <Link to="/pharmacymanagement" className='dropdown_nav_link'>
                <div className='dropdown_item'>Pharmacy Management</div>
                </Link>
                <Link to="/labmanagement" className='dropdown_nav_link'>
                <div className='dropdown_item'>Lab Management</div>
                </Link>
                <Link to="/rolemanagement" className='dropdown_nav_link'>
                <div className='dropdown_item'>Role Access Management</div>
                </Link>
                <Link to="/profile" className='dropdown_nav_link'>
                <div className='dropdown_item'>Profile</div>
                </Link>
                <Link to="/notification" className='dropdown_nav_link'>
                <div className='dropdown_item'>Notification</div>
                </Link>
                <Link to="/earning" className='dropdown_nav_link'>
                <div className='dropdown_item'>My Earning</div>
                </Link>
                <Link to="/bookingrequestdha" className='dropdown_nav_link'>
                <div className='dropdown_item'>Booking Request</div>
                </Link>
                <Link to="/bookingpendingdha" className='dropdown_nav_link'>
                <div className='dropdown_item'>Booking Pending</div>
                </Link>
                <Link to="/dhahospital" className='dropdown_nav_link'>
                <div className='dropdown_item'>Booking Completed</div>
                </Link>
                <Link to="/rejectdhahospital" className='dropdown_nav_link'>
                <div className='dropdown_item'>Booking Rejected</div>
                </Link>

              </div>
              )}
              
              </li>
            
            <li className='list_item_1'><FaBell className='icons_bell'/></li>
        </ul>

    </nav>




    </div>
  )
}

export default Navbar
