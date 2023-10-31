import React from 'react';
import './Navbar.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
        <div className='navbar_logo'>
        <img src={Weblogo} alt="logo" />
        </div>

        <ul className='nav_links'>
            <li className='list_item'>Dooper At Home</li>
            <li className='list_item'>Lab Tesst</li>
            <li className='list_item'>Our Network <i class="fas fa-caret-down"></i></li>
            <li className='list_item'>About Us</li>
            <li className='list_item'>Contact Us</li>
            <li className='list_item'>Join Us With</li>
            <li className='list_item'>Hospital Name</li>
            <li className='list_item'>Logo</li>
        </ul>

    </nav>




    </div>
  )
}

export default Navbar
