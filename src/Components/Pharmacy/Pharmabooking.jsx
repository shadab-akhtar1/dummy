import React from 'react';
import './Pharmabooking.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {PiArrowLeftFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import userpic from "../Assets/Ellipse 3.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import {Footer} from '../Dhamanagement/Footer';

export const Pharmabooking = () => {
  return (
    <>
    <nav className='pharmabooking_navbar_doctorcase'>
        <div className='pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='pharmabooking_nav_links_doctorcase'>
            <li className='pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='pharmabooking_list_item_1_doctorcase'><FaBell className='pharmabooking_icons_bell_doctorcase'/></li>
            <li className='pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>
    <div className='pharmabooking_middle_container_doctor_case_details'>
      <div className='pharmabooking_middle_container_heading_doctor_case_details'>
        <div className='pharmabooking_middle_container_heading_1_doctor_case_details'>
            <Link to={"/pharmacymanagement"}>
            <div className='pharmabooking_arrdoctor_div'>< PiArrowLeftFill className='pharmabooking_details_arrow_case_doctor'/></div>
            </Link>
            <h2>Case Details</h2>
        </div>
       </div>
       <div className='pharmabooking_third_container_doctor_case_details'>
                <div className='pharmabooking_third_container_left_doctor_case_details'>
                    <div className='pharmabooking_doctor_case_details_userprofile'>
                        <div className='pharmabooking_doctor_case_details_userprofile_profile'>
                        <img src={userpic} alt="userimage" />
                        </div>
                        <div className='pharmabooking_doctor_case_details_userprofile_info'>
                            <ul>
                                <li className='pharmabooking_doctor_li_1_case'>Patient Name</li>
                                <li className='pharmabooking_doctor_li_2_case'>xyz,street name</li>
                                <li className='pharmabooking_doctor_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='pharmabooking_doctor_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                    <div className='pharmabooking_doctor_case_detail_complet'>
                        <div className='pharmabooking_doctor_case_detail_completion'><p>Request For</p></div>
                        <div className='pharmabooking_doctor_case_detail_time'>
                
                            <p className='pharmabooking_doctor_case_detail_time_1'><PiCalendarBlankLight className='pharmabooking_calen_doctor'/>13 june,2023</p>
                            <p className='pharmabooking_doctor_case_detail_time_2'><CiClock2 className='pharmabooking_doctor_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>
                    <div className='pharmabooking_doctor_case_detail_symptom'>
                        <div className='pharmabooking_doctor_case_deatil_symptom_1'>
                            <div className='pharmabooking_doctor_case_detail_symptom_left'>
                                <div className='pharmabooking_doctor_case_detail_symptom_left_1'>Medicine 1</div>
                                <div className='pharmabooking_doctor_case_detail_symptom_left_1'>Medicine 2</div>
                                <div className='pharmabooking_doctor_case_detail_symptom_left_1'>Medicine 3</div>
                            </div>
                            <div className='pharmabooking_doctor_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='pharmabooking_doctor_case_detail_para'>
                        <div className='pharmabooking_doctor_case_detail_para_left'>
                        
                            <div className='pharmabooking_doctor_case_detail_container_1'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            
                            <div className='pharmabooking_doctor_case_detail_container_2'>02</div>
                            <div className='pharmabooking_doctor_case_detail_container_3'>03</div>
                            <div className='pharmabooking_doctor_case_detail_container_4'>04</div>
                            <div className='pharmabooking_doctor_case_detail_container_5'>05</div>
                            
                    
                        </div>
                       
                        <div className='pharmabooking_doctor_case_detail_para_right'>

                        <div className='pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Prescription Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Quotation Sent</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Payment Done</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Service Started</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Delivered</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div className='pharmabooking_third_container_right_doctor_case_details'>
                    <div className='pharmabooking_third_container_right_doctorcase_details_first'>
                        <div className='pharmabooking_third_container_right_doctorcase_details_first_1'>
                            <h2>Pharmacy Quotation</h2>
                        </div>
                        <div className='pharmabooking_third_container_right_doctorcase_details_first_2'>
                            <ul>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_list'>Medicine 1</li>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 600</li>
                            </ul>
                        </div>
                        <div className='pharmabooking_third_container_right_doctorcase_details_first_3'>
                            <ul>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_list'>Medicine 1</li>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 600</li>
                            </ul>
                        </div>
                        <div className='pharmabooking_third_container_right_doctorcase_details_first_4'>
                            <ul>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_list'>Taxes</li>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 600</li>
                                
                            </ul>
                        </div>

                        <div className='pharmabooking_third_container_right_doctorcase_details_first_5'>
                            <ul>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_list'>Sub Total</li>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='pharmabooking_third_container_right_doctorcase_details_first_6'>
                            <ul>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_list'>Discount</li>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='pharmabooking_third_container_right_doctorcase_details_first_7'>
                            <ul>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_list'>Total</li>
                                <li className='pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                    </div>
                </div>
        </div>

       </div>
       <div className='pharmabooking_pharmacy'><Footer/></div>
    </>
  )
}
export default Pharmabooking
