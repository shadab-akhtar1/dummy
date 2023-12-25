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
        <Link to={"/dhamanagement"} className='navbars_link_tag'>
            <li  className='list_item_2_navbars'><p>DHA</p> <span className='list_item_span_navbars'>Management</span></li>
            </Link>
            <Link to={"/doctormanagement"} className='navbars_link_tag'>
            <li  className='list_item_2_navbars'><p>Doctor</p> <span className='list_item_span_navbars'>Management</span></li>
            </Link>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Our Network < FaCaretDown/></li>
            <Link to={"/pharmacymanagement"} className='navbars_link_tag'>
            <li  className='list_item_2_navbars'><p>Pharmacy</p> <span className='list_item_span_navbars'>Management</span></li>
            </Link>
            <Link to={"/labmanagement"} className='navbars_link_tag'>
            <li  className='list_item_2_navbars'><p>Lab</p> <span className='list_item_span_navbars'>Management</span></li>
            </Link>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase_lab'>Join Us With <FaCaretDown/></li>
            <Link to={"/profile"} className='navbars_link'>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_dhacase_lab'><img src={profile} alt="" className='bookingrequestsdoctor_pharmabooking_jaydoctor_profile_lab'/>Jaydeep Sakhiya <FaCaretDown/></li>
            </Link>
            <Link to={"/notification"} className='navbars_link_tag'>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_doctorcase_lab'><FaBell className='bookingrequestsdoctor_pharmabooking_icons_bell_doctorcase_lab'/></li>
            </Link>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_doctorcase_2_lab'>< BsTelephone className='bookingrequestsdoctor_pharmabooking_phone_icon_doctorcase_lab'/></li>
        </ul>

    </nav>
    </>
  )
}
export default Navbars