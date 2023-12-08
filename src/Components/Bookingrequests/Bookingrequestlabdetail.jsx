import React from 'react';
import './Bookingrequestlabdetail.css';
import {Navbars} from '../Dhamanagement/Navbars';
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
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';
import { IoCheckmark } from "react-icons/io5";

export const Bookingrequestlabdetail = () => {
  return (
    <>
    <div><Navbars/></div>

    <div className='bookingcase_middle_container_dha_case_details'>
      <div className='bookingcase_middle_container_heading_dha_case_details'>
        <div className='bookingcase_middle_container_heading_1_dha_case_details'>
            <Link to={"/bookingrequestlab"} className='bookingreqlabdetail_back'>
            <div className='arr_div'>< PiArrowLeftFill className='bookingcase_details_arrow_case_dha'/></div>
            </Link>
          <h2># 123456</h2>
        </div>
       </div>

            <div className='bookingcase_third_container_dha_case_details'>
                <div className='bookingcase_third_container_left_dha_case_details'>
                    <div className='bookingcase_dha_case_details_userprofile'>
                        <div className='bookingcase_dha_case_details_userprofile_left'>
                        <div className='bookingcase_dha_case_details_userprofile_profile'>
                            <img src={userpic} alt="userimage" />
                        </div>
                        <div className='bookingcase_dha_case_details_userprofile_info'>
                            <ul>
                                <li className='bookingcase_dha_li_1_case'>Patient Name</li>
                                <li className='bookingcase_dha_li_2_case'>xyz,street name</li>
                                <li className='bookingcase_dha_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='bookingcase_dha_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                        </div>
                        <div className='bookingcase_dha_case_details_userprofile_info_2'>
                            <div className='bookingcase_dha_case_details_userprofile_info_2_1'><FaPhoneAlt className='bookingcase_dha_case_details_userprofile_info_2_1_icon'/></div>
                            <div className='bookingcase_dha_case_details_userprofile_info_2_2'><HiLocationMarker className='bookingcase_dha_case_details_userprofile_info_2_1_icon1'/></div>

                        </div>
                        
                    </div>
                    
                    <div className='bookingcase_dha_case_detail_symptom'>
                        <div className='bookingcase_dha_case_deatil_symptom_1'>
                            <div className='bookingcase_dha_case_detail_symptom_left'>
                                <div className='bookingcase_dha_case_detail_symptom_left_1'>Test 1</div>
                                <div className='bookingcase_dha_case_detail_symptom_left_1'>Test 2</div>
                                <div className='bookingcase_dha_case_detail_symptom_left_1'>Test 3</div>
                            </div>
                            <div className='bookingcase_dha_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='bookingcase_dha_case_detail_complet'>
                        <div className='bookingcase_dha_case_detail_completion'><p>Request For</p></div>
                        <div className='bookingcase_dha_case_detail_time'>
                
                            <p className='bookingcase_dha_case_detail_time_1'><PiCalendarBlankLight className='bookingcase_calen'/>13 june,2023</p>
                            <p className='bookingcase_dha_case_detail_time_2'><CiClock2 className='bookingcase_dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>


                    <div className='lab_pharmabooking_doctor_case_detail_para'>
                        <div className='lab_pharmabooking_doctor_case_detail_para_left'>
                        
                            <div className='lab_pharmabooking_doctor_case_detail_container_1'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            
                            <div className='lab_pharmabooking_doctor_case_detail_container_2'>02</div>
                            <div className='lab_pharmabooking_doctor_case_detail_container_3'>03</div>
                            
                            
                    
                        </div>
                       
                        <div className='lab_pharmabooking_doctor_case_detail_para_right'>

                        <div className='lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Lab Test Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Sample Collected</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Complete</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                        </div>
                    </div>

                    
                
                </div>
                

            </div>
    </div>
    <div className='bookingdhacase_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingrequestlabdetail