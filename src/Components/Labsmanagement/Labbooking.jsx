import React from 'react';
import './Labbooking.css';
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
import {Navbar} from '../Dhamanagement/Navbar';

export const Labbooking = () => {
  return (
    <>
    <div className='labbooking_managemenet'><Navbar/></div>
    <div className='lab_pharmabooking_middle_container_doctor_case_details'>
      <div className='lab_pharmabooking_middle_container_heading_doctor_case_details'>
        <div className='lab_pharmabooking_middle_container_heading_1_doctor_case_details'>
            <Link to={"/labmanagement"} className='labbooking_back'>
            <div className='lab_pharmabooking_arrdoctor_div'>< PiArrowLeftFill className='lab_pharmabooking_details_arrow_case_doctor'/></div>
            </Link>
            <h2>Case Details</h2>
        </div>
       </div>
       <div className='lab_pharmabooking_third_container_doctor_case_details'>
                <div className='lab_pharmabooking_third_container_left_doctor_case_details'>
                    <div className='lab_pharmabooking_doctor_case_details_userprofile'>
                        <div className='lab_pharmabooking_doctor_case_details_userprofile_profile'>
                        <img src={userpic} alt="userimage" />
                        </div>
                        <div className='lab_pharmabooking_doctor_case_details_userprofile_info'>
                            <ul>
                                <li className='lab_pharmabooking_doctor_li_1_case'>Patient Name</li>
                                <li className='lab_pharmabooking_doctor_li_2_case'>xyz,street name</li>
                                <li className='lab_pharmabooking_doctor_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='lab_pharmabooking_doctor_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lab_pharmabooking_doctor_case_detail_symptom'>
                        <div className='lab_pharmabooking_doctor_case_deatil_symptom_1'>
                            <div className='lab_pharmabooking_doctor_case_detail_symptom_left'>
                                <div className='lab_pharmabooking_doctor_case_detail_symptom_left_1'>Test 1</div>
                                <div className='lab_pharmabooking_doctor_case_detail_symptom_left_1'>Test 2</div>
                                <div className='lab_pharmabooking_doctor_case_detail_symptom_left_1'>Test 3</div>
                            </div>
                            <div className='lab_pharmabooking_doctor_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='lab_pharmabooking_doctor_case_detail_complet'>
                        <div className='lab_pharmabooking_doctor_case_detail_completion'><p>Request For</p></div>
                        <div className='lab_pharmabooking_doctor_case_detail_time'>
                
                            <p className='lab_pharmabooking_doctor_case_detail_time_1'><PiCalendarBlankLight className='lab_pharmabooking_calen_doctor'/>13 june,2023</p>
                            <p className='lab_pharmabooking_doctor_case_detail_time_2'><CiClock2 className='lab_pharmabooking_doctor_case_detail_clock'/>09:00AM</p>
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
                            
                                <div className='lab_pharmabooking_doctor_case_detail_para_right_2_up_1'>
                                    <div className='lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Lab Test Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                                
                        </div>
                        <div className='lab_pharmabooking_doctor_case_detail_para_right_5'>
                        <Link to={"/labbookingstarted"} className='labbooking_link'>
                                <div className='lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Service Started</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                                </Link>
                        </div>
                        <div className='lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Completed</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div className='lab_pharmabooking_third_container_right_doctor_case_details'>
                    <div className='lab_pharmabooking_third_container_right_doctorcase_details_first'>
                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_1'>
                            <h2>Payment Details</h2>
                        </div>
                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_2'>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_list_div'>Test 1</div>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_item_div'>Rs 600</div>
                        </div>
                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_3'>
                            <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_list_div'>Test 1</div>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_item_div'>Rs 600</div>
                        </div>
                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_4'>
                            <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_list_div'>Taxes</div>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_item_div'>Rs 600</div>
                        </div>

                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_5'>
                            <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_list_div'>Subtotal</div>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_item_div'>Rs 100</div>
                        </div>
                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_6'>
                            <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_list_div'>Discount</div>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_item_div'>Rs 100</div>
                        </div>

                        <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_7'>
                            <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_list_div_1'>Total</div>
                           <div className='lab_pharmabooking_third_container_right_doctorcase_details_first_item_div'>Rs 400</div>
                        </div>

                        
                       

                    </div>
                </div>
        </div>

       </div>
       <div className='lab_pharmabooking_pharmacy'><Footer/></div>
    </>
  )
}
export default Labbooking
