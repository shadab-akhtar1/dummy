import React from 'react';
import './Labbookingstarted.css';
import {PiArrowLeftFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import userpic from "../Assets/Ellipse 3.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import {Footer} from '../Dhamanagement/Footer';
import {Navbar} from '../Dhamanagement/Navbar';

export const Labbookingstarted = () => {
  return (
    <>
    <div className='labstarted_managemenet'><Navbar/></div>
    <div className='labstarted_pharmabooking_middle_container_doctor_case_details'>
      <div className='labstarted_pharmabooking_middle_container_heading_doctor_case_details'>
        <div className='labstarted_pharmabooking_middle_container_heading_1_doctor_case_details'>
            <Link to={"/pharmadetail"}>
            <div className='labstarted_pharmabooking_arrdoctor_div'>< PiArrowLeftFill className='labstarted_pharmabooking_details_arrow_case_doctor'/></div>
            </Link>
            <h2>Case Details</h2>
        </div>
       </div>
       <div className='labstarted_pharmabooking_third_container_doctor_case_details'>
                <div className='labstarted_pharmabooking_third_container_left_doctor_case_details'>
                    <div className='labstarted_pharmabooking_doctor_case_details_userprofile'>
                        <div className='labstarted_pharmabooking_doctor_case_details_userprofile_profile'>
                        <img src={userpic} alt="userimage" />
                        </div>
                        <div className='labstarted_pharmabooking_doctor_case_details_userprofile_info'>
                            <ul>
                                <li className='labstarted_pharmabooking_doctor_li_1_case'>Patient Name</li>
                                <li className='labstarted_pharmabooking_doctor_li_2_case'>xyz,street name</li>
                                <li className='labstarted_pharmabooking_doctor_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='labstarted_pharmabooking_doctor_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                    <div className='labstarted_pharmabooking_doctor_case_detail_complet'>
                        <div className='labstarted_pharmabooking_doctor_case_detail_completion'><p>Request For</p></div>
                        <div className='labstarted_pharmabooking_doctor_case_detail_time'>
                
                            <p className='labstarted_pharmabooking_doctor_case_detail_time_1'><PiCalendarBlankLight className='labstarted_pharmabooking_calen_doctor'/>13 june,2023</p>
                            <p className='labstarted_pharmabooking_doctor_case_detail_time_2'><CiClock2 className='labstarted_pharmabooking_doctor_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>
                    <div className='labstarted_pharmabooking_doctor_case_detail_symptom'>
                        <div className='labstarted_pharmabooking_doctor_case_deatil_symptom_1'>
                            <div className='labstarted_pharmabooking_doctor_case_detail_symptom_left'>
                                <div className='labstarted_pharmabooking_doctor_case_detail_symptom_left_1'>Test 1</div>
                                <div className='labstarted_pharmabooking_doctor_case_detail_symptom_left_1'>Test 2</div>
                                <div className='labstarted_pharmabooking_doctor_case_detail_symptom_left_1'>Test 3</div>
                            </div>
                            <div className='labstarted_pharmabooking_doctor_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='labstarted_pharmabooking_doctor_case_detail_para'>
                        <div className='labstarted_pharmabooking_doctor_case_detail_para_left'>
                        
                            <div className='labstarted_pharmabooking_doctor_case_detail_container_1'><div><IoCheckmark className='labstarted_pharmabooking_doctor_check_mark' /></div></div>
                            
                            <div className='labstarted_pharmabooking_doctor_case_detail_container_2'>02</div>
                            <div className='labstarted_pharmabooking_doctor_case_detail_container_3'>03</div>
                            
                            
                    
                        </div>
                       
                        <div className='labstarted_pharmabooking_doctor_case_detail_para_right'>

                        <div className='labstarted_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='labstarted_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='labstarted_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Lab Test Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='labstarted_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='labstarted_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='labstarted_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Service Started</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                    
                                </div>
                                <div className='labstarted_pharmabooking_doctor_case_detail_calendar'>
                                      <div className='labstarted_pharmabooking_doctor_case_detail_calendar_1'><span className='labstarted_span'>32</span ><span className='labstarted_span_2'>MM</span></div>
                                      <div className='labstarted_pharmabooking_doctor_case_detail_calendar_2'><span className='labstarted_span'>23</span> <span className='labstarted_span_2'>SS</span></div>
                                      <div className='labstarted_pharmabooking_doctor_case_detail_calendar_3'><span className='labstarted_span'>01</span> <span className='labstarted_span_2'>MS</span></div>
                                    </div>
                        </div>
                        <div className='labstarted_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='labstarted_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='labstarted_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Completed</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div className='labstarted_pharmabooking_third_container_right_doctor_case_details'>
                    <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first'>
                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_1'>
                            <h2>Payment Details</h2>
                        </div>
                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_2'>
                            <ul>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_list'>Test 1</li>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 600</li>
                            </ul>
                        </div>
                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_3'>
                            <ul>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_list'>Test 1</li>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 600</li>
                            </ul>
                        </div>
                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_4'>
                            <ul>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_list'>Taxes</li>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 600</li>
                                
                            </ul>
                        </div>

                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_5'>
                            <ul>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_list'>Sub Total</li>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_6'>
                            <ul>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_list'>Discount</li>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_7'>
                            <ul>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_list'>Total</li>
                                <li className='labstarted_pharmabooking_third_container_right_doctorcase_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                        
                       

                    </div>
                </div>
        </div>

       </div>
       <div className='labstarted_pharmabooking_pharmacy'><Footer/></div>
    
    </>
  )
}
export default Labbookingstarted
