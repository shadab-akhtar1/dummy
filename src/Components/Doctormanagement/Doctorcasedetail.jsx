import React from 'react';
import './Doctorcasedetail.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import {BiArrowBack} from 'react-icons/bi';

export const Doctorcasedetail = () => {
  return (
    <>

<nav className='navbar_doctorcase'>
        <div className='navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='nav_links_doctorcase'>
            <li className='list_item_doctorcase'>Dooper At Home</li>
            <li className='list_item_doctorcase'>Lab Tesst </li>
            <li className='list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='list_item_doctorcase'>About Us</li>
            <li className='list_item_doctorcase'>Contact Us</li>
            <li className='list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='list_item_1_doctorcase'>Hospital Name <FaCaretDown/></li>
            <li className='list_item_1_doctorcase'><FaBell className='icons_bell_doctorcase'/></li>
        </ul>

    </nav>

    <div className='middle_container_doctor_case_details'>
      <div className='middle_container_heading_doctor_case_details'>
        <div className='middle_container_heading_1_doctor_case_details'>
          <h2>< BiArrowBack className='details_arrow_case'/>Case #123456</h2>
        </div>
       </div>

            <div className='third_container_doctor_case_details'>
                <div className='third_container_left_doctor_case_details'>
                    <div className='doctor_case_details_userprofile'>
                        <div className='doctor_case_details_userprofile_profile'>
                            <h5>dfbjh</h5>
                        </div>
                        <div className='doctor_case_details_userprofile_info'>
                            <ul>
                                <li>Patient Name</li>
                                <li>xyz,street name</li>
                                <li>Age:32|Gender:Male|Blood Group:O+</li>
                                <li>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                
                </div>
                <div className='third_container_right_doctor_case_details'>
                    <h3>jdhfk</h3>
                </div>

            </div>
    </div>
    </>
  )
}

export default Doctorcasedetail
