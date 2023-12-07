import React from 'react';
import './Completedaddquotation.css';
import Navbars from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpicimg from "../Assets/Ellipse 2 (1).jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';
import { IoCheckmark } from "react-icons/io5";

export const Completedaddquotation = () => {
  return (
    <>
    <div><Navbars/></div>
    
    <div className='completedquotation_addquotation4_bookingcase_middle_container_dha_case_details'>
      <div className='completedquotation_addquotation4_bookingcase_middle_container_heading_dha_case_details'>
        <div className='completedquotation_addquotation4_bookingcase_middle_container_heading_1_dha_case_details'>
            <Link to={"/pharmacyhospital"} className='completedaddquotation_back'>
            <div className='completedquotation_addquotation4_arr_div'>< PiArrowLeftFill className='completedquotation_addquotation4_bookingcase_details_arrow_case_dha'/></div>
            </Link>
          <h2># 123456</h2>
        </div>
       </div>

            <div className='completedquotation_addquotation4_bookingcase_third_container_dha_case_details'>
                <div className='completedquotation_addquotation4_bookingcase_third_container_left_dha_case_details'>
                    <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile'>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_left'>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_profile'>
                            <img src={userpicimg} alt="userimage" />
                        </div>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_info'>
                            <ul>
                                <li className='completedquotation_addquotation4_bookingcase_dha_li_1_case'>Patient Name</li>
                                <li className='completedquotation_addquotation4_bookingcase_dha_li_2_case'>xyz,street name</li>
                                <li className='completedquotation_addquotation4_bookingcase_dha_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='completedquotation_addquotation4_bookingcase_dha_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                        </div>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_info_2'>
                            <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_info_2_1'><FaPhoneAlt className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_info_2_1_icon'/></div>
                            <div className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_info_2_2'><HiLocationMarker className='completedquotation_addquotation4_bookingcase_dha_case_details_userprofile_info_2_1_icon1'/></div>

                        </div>
                        
                    </div>
                    
                    <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_symptom'>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_deatil_symptom_1'>
                            <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_symptom_left'>
                                <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_symptom_left_1'>Vaccine 1</div>
                                <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_symptom_left_1'>Vaccine 2</div>
                                <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_symptom_left_1'>Vaccine 3</div>
                            </div>
                            <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_complet'>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_completion'><p>Need</p></div>
                        <div className='completedquotation_addquotation4_bookingcase_dha_case_detail_time'>
                
                            <p className='completedquotation_addquotation4_bookingcase_dha_case_detail_time_1'><PiCalendarBlankLight className='completedquotation_addquotation4_bookingcase_calen'/>13 june,2023</p>
                            <p className='completedquotation_addquotation4_bookingcase_dha_case_detail_time_2'><CiClock2 className='completedquotation_addquotation4_bookingcase_dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>


                    <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para'>
                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_left'>
                        
                            <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_container_1'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            
                            <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_container_2'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_container_3'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_container_4'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_container_5'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            
                            
                    
                        </div>
                       
                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right'>

                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Prescription Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Quotation Sent</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Payment Done</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Service Started</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='completedquotation_addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Delivered</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                        </div>
                    </div>

                    
                
                </div>
                <div className='completedquotation_addquotation4_bookingcase_third_container_right_dha_case_details'>
                <div className='completedquotation_bookingdoctorcase_third_container_right_case_details_first'>
                        <div className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_1'>
                            <h2>Payment Recieved</h2>
                        </div>
                        

                        <div className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_5'>
                            <ul>
                                <li className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_list'>Sub Total</li>
                                <li className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_6'>
                            <ul>
                                <li className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_list'>Discount</li>
                                <li className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_7'>
                            <ul>
                                <li className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_list'>Total</li>
                                <li className='completedquotation_bookingdoctorcase_third_container_right_case_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                    </div>

                </div>
                

            </div>
    </div>
    <div className='completedquotation_addquotation4_bookingdhacase_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Completedaddquotation