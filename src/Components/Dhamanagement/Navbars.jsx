import React from 'react';
import './Navbars.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';


export const Navbars = () => {
  return (
    <>
    

    <nav className='bookingrequestsdoctor_pharmabooking_navbar_doctorcase_lab'>
        <div className='bookingrequestsdoctor_pharmabooking_navbar_logo_doctorcase_lab'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='bookingrequestsdoctor_pharmabooking_nav_links_doctorcase_lab'>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Dooper At Home</li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Lab Tesst </li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Our Network < FaCaretDown/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>About Us</li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Contact Us</li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Join Us With <FaCaretDown/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_dhacase_lab'><img src={profile} alt="" className='bookingrequestsdoctor_pharmabooking_jaydoctor_profile_lab'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_doctorcase_lab'><FaBell className='bookingrequestsdoctor_pharmabooking_icons_bell_doctorcase_lab'/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_doctorcase_2_lab'>< BsTelephone className='bookingrequestsdoctor_pharmabooking_phone_icon_doctorcase_lab'/></li>
        </ul>

    </nav>
    </>
  )
}
export default Navbars