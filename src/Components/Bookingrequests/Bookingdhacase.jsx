import React from 'react';
import './Bookingdhacase.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpic from "../Assets/Ellipse 3.jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";


export const Bookingdhacase = () => {
  return (
    <>
    <nav className='bookingcase_dhaassign_bookingrequests_pharmabooking_navbar_doctorcase'>
        <div className='bookingcase_dhaassign_bookingrequests_pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='bookingcase_dhaassign_bookingrequests_pharmabooking_nav_links_doctorcase'>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='bookingcase_dhaassign_bookingrequests_pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase'><FaBell className='bookingcase_dhaassign_bookingrequests_pharmabooking_icons_bell_doctorcase'/></li>
            <li className='bookingcase_dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='bookingcase_dhaassign_bookingrequests_pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>

    <div className='middle_container_dha_case_details'>
      <div className='middle_container_heading_dha_case_details'>
        <div className='middle_container_heading_1_dha_case_details'>
            <Link to={"/dhadetailsview"}>
            <div className='arr_div'>< PiArrowLeftFill className='details_arrow_case_dha'/></div>
            </Link>
          <h2>Case Details</h2>
        </div>
       </div>

            <div className='third_container_dha_case_details'>
                <div className='third_container_left_dha_case_details'>
                    <div className='dha_case_details_userprofile'>
                        <div className='dha_case_details_userprofile_profile'>
                            <img src={userpic} alt="userimage" />
                        </div>
                        <div className='dha_case_details_userprofile_info'>
                            <ul>
                                <li className='dha_li_1_case'>Patient Name</li>
                                <li className='dha_li_2_case'>xyz,street name</li>
                                <li className='dha_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='dha_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                    <div className='dha_case_detail_service_type'>
                        <div className='dha_case_detail_service_name'>
                            <h3>Service Type:</h3>
                            <p>Non Urgent case</p>

                        </div>
                    </div>
                    <div className='dha_case_detail_symptom'>
                        <div className='dha_case_deatil_symptom_1'>
                            <div className='dha_case_detail_symptom_left'>
                                <div className='dha_case_detail_symptom_left_1'>Symptom 1</div>
                                <div className='dha_case_detail_symptom_left_1'>Symptom 2</div>
                                <div className='dha_case_detail_symptom_left_1'>Symptom 3</div>
                            </div>
                            <div className='dha_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='dha_case_detail_complet'>
                        <div className='dha_case_detail_completion'><p>Completed</p></div>
                        <div className='dha_case_detail_time'>
                
                            <p className='dha_case_detail_time_1'><PiCalendarBlankLight className='calen'/>13 june,2023</p>
                            <p className='dha_case_detail_time_2'><CiClock2 className='dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>

                    <div className='dha_case_detail_para'>
                        <div className='dha_case_detail_para_main'>
                            <div className='dha_case_detail_para_main_left'>
                                <h4>Patient's Note</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='dha_case_detail_para_main_right'>
                                <h4>Patient's Video</h4>
                                <img src={vid} alt="" />
                            </div>
                        </div>
                        
                        
                    </div>

                    <div className='booking_dha_case'>
                        <div className='booking_dha_case_1'><button>Assign DHA</button></div>
                        <div className='booking_dha_case_2'><button>Assign Doctor</button></div>

                    </div>
                
                </div>
                <div className='third_container_right_dha_case_details'>
                    <div className='third_container_right_case_details_first'>
                        <div className='third_container_right_case_details_first_1'>
                            <h2>Order details</h2>
                        </div>
                        <div className='third_container_right_case_details_first_2'>
                            <ul>
                                <li className='third_container_right_case_details_first_list'>Service 1</li>
                                <li className='third_container_right_case_details_first_item'>Rs 546</li>
                            </ul>
                        </div>
                        <div className='third_container_right_case_details_first_3'>
                            <ul>
                                <li className='third_container_right_case_details_first_list'>GST</li>
                                <li className='third_container_right_case_details_first_item'>Rs 78</li>
                            </ul>
                        </div>
                        <div className='third_container_right_case_details_first_4'>
                            <ul>
                                <li className='third_container_right_case_details_first_list'>Other Charges</li>
                                <li className='third_container_right_case_details_first_item'>Rs 78</li>
                                
                            </ul>
                        </div>

                        <div className='third_container_right_case_details_first_5'>
                            <ul>
                                <li className='third_container_right_case_details_first_list'>Sub Total</li>
                                <li className='third_container_right_case_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='third_container_right_case_details_first_6'>
                            <ul>
                                <li className='third_container_right_case_details_first_list'>Discount</li>
                                <li className='third_container_right_case_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='third_container_right_case_details_first_7'>
                            <ul>
                                <li className='third_container_right_case_details_first_list'>Total</li>
                                <li className='third_container_right_case_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                    </div>
                    
                    
                    

                    
                </div>

            </div>
    </div>
    </>
  )
}
export default Bookingdhacase