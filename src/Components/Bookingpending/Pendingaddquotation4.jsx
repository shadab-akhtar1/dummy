import React from 'react';
import './Pendingaddquotation4.css';
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

export const Pendingaddquotation4 = () => {
  return (
    <>
    <div><Navbars/></div>
    
    <div className='addquotation4_bookingcase_middle_container_dha_case_details'>
      <div className='addquotation4_bookingcase_middle_container_heading_dha_case_details'>
        <div className='addquotation4_bookingcase_middle_container_heading_1_dha_case_details'>
            <Link to={""}>
            <div className='addquotation4_arr_div'>< PiArrowLeftFill className='addquotation4_bookingcase_details_arrow_case_dha'/></div>
            </Link>
          <h2># 123456</h2>
        </div>
       </div>

            <div className='addquotation4_bookingcase_third_container_dha_case_details'>
                <div className='addquotation4_bookingcase_third_container_left_dha_case_details'>
                    <div className='addquotation4_bookingcase_dha_case_details_userprofile'>
                        <div className='addquotation4_bookingcase_dha_case_details_userprofile_left'>
                        <div className='addquotation4_bookingcase_dha_case_details_userprofile_profile'>
                            <img src={userpicimg} alt="userimage" />
                        </div>
                        <div className='addquotation4_bookingcase_dha_case_details_userprofile_info'>
                            <ul>
                                <li className='addquotation4_bookingcase_dha_li_1_case'>Patient Name</li>
                                <li className='addquotation4_bookingcase_dha_li_2_case'>xyz,street name</li>
                                <li className='addquotation4_bookingcase_dha_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='addquotation4_bookingcase_dha_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                        </div>
                        <div className='addquotation4_bookingcase_dha_case_details_userprofile_info_2'>
                            <div className='addquotation4_bookingcase_dha_case_details_userprofile_info_2_1'><FaPhoneAlt className='addquotation4_bookingcase_dha_case_details_userprofile_info_2_1_icon'/></div>
                            <div className='addquotation4_bookingcase_dha_case_details_userprofile_info_2_2'><HiLocationMarker className='addquotation4_bookingcase_dha_case_details_userprofile_info_2_1_icon1'/></div>

                        </div>
                        
                    </div>
                    
                    <div className='addquotation4_bookingcase_dha_case_detail_symptom'>
                        <div className='addquotation4_bookingcase_dha_case_deatil_symptom_1'>
                            <div className='addquotation4_bookingcase_dha_case_detail_symptom_left'>
                                <div className='addquotation4_bookingcase_dha_case_detail_symptom_left_1'>Vaccine 1</div>
                                <div className='addquotation4_bookingcase_dha_case_detail_symptom_left_1'>Vaccine 2</div>
                                <div className='addquotation4_bookingcase_dha_case_detail_symptom_left_1'>Vaccine 3</div>
                            </div>
                            <div className='addquotation4_bookingcase_dha_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='addquotation4_bookingcase_dha_case_detail_complet'>
                        <div className='addquotation4_bookingcase_dha_case_detail_completion'><p>Need</p></div>
                        <div className='addquotation4_bookingcase_dha_case_detail_time'>
                
                            <p className='addquotation4_bookingcase_dha_case_detail_time_1'><PiCalendarBlankLight className='addquotation4_bookingcase_calen'/>13 june,2023</p>
                            <p className='addquotation4_bookingcase_dha_case_detail_time_2'><CiClock2 className='addquotation4_bookingcase_dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>


                    <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para'>
                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_left'>
                        
                            <div className='addquotation4_lab_pharmabooking_doctor_case_detail_container_1'><div><IoCheckmark className='pharmabooking_doctor_check_mark' /></div></div>
                            
                            <div className='addquotation4_lab_pharmabooking_doctor_case_detail_container_2'>02</div>
                            <div className='addquotation4_lab_pharmabooking_doctor_case_detail_container_3'>03</div>
                            <div className='addquotation4_lab_pharmabooking_doctor_case_detail_container_4'>04</div>
                            <div className='addquotation4_lab_pharmabooking_doctor_case_detail_container_5'>05</div>
                            
                            
                    
                        </div>
                       
                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right'>

                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Prescription Details</h4>
                                        <p>Assigned</p>

                                    </div>
                                </div>
                        </div>
                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Quotation Sent</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Payment Done</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Service Started</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_5'>
                                <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_right_2_up'>
                                    <div className='addquotation4_lab_pharmabooking_doctor_case_detail_para_content_2'>
                                        <h4>Delivered</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                </div>
                        </div>
                        
                        </div>
                    </div>

                    
                
                </div>
                

            </div>
    </div>
    <div className='addquotation4_bookingdhacase_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Pendingaddquotation4
