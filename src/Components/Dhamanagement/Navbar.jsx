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
            <Link to={"/dhamanagement"} className='navbar_link_tag'>
            <li className='list_item_2'><p>DHA</p> <span className='list_item_span'>Management</span></li>
            </Link>
            <Link to={"/doctormanagement"} className='navbar_link_tag'>
            <li className='list_item_2'><p>Doctor</p> <span  className='list_item_span'>Management</span> </li>
            </Link>
            <li className='list_item'>Our Network < FaCaretDown/></li>
            <Link to={"/pharmacymanagementmain"} className='navbar_link_tag'>
            <li className='list_item_2'><p>Pharmacy </p><span  className='list_item_span'>Management</span></li>
            </Link>
            <Link to={"/labmanagement"} className='navbar_link_tag'>
            <li className='list_item_2'><p>Lab</p> <span  className='list_item_span'>Management</span></li>
            </Link>
            <li className='list_item'>Join Us With <FaCaretDown/></li>
            
            <li className='list_item_1'>
    
              <div className='dropdown_btn' onClick={(e)=> setIsActive(!isActive)}>Hospital Name
              <FaCaretDown/>
              </div>
              {isActive &&(
              <div className='dropdown_content'>
               
                <Link to="/rolemanagement" className='dropdown_nav_link'>
                <div className='dropdown_item'>Role Access Management</div>
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
              <Link to="/notification" className='dropdown_nav_link'>
            <li className='list_item_1'><FaBell className='icons_bell'/></li>
            </Link>
        </ul>

    </nav>




    </div>
  )
}

export default Navbar
