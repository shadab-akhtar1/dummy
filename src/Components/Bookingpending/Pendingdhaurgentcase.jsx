import React from 'react';
import './Pendingdhaurgentcase.css';
import {Navbars} from '../Dhamanagement/Navbars';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import userpic from "../Assets/Ellipse 3.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import vid from "../Assets/Frame 12431.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {Footer} from '../Dhamanagement/Footer';

export const Pendingdhaurgentcase = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='bookingcase_middle_container_dha_case_details'>
      <div className='bookingcase_middle_container_heading_dha_case_details'>
        <div className='bookingcase_middle_container_heading_1_dha_case_details'>
            <Link to={"/dhadetailsview"}>
            <div className='arr_div'>< PiArrowLeftFill className='bookingcase_details_arrow_case_dha'/></div>
            </Link>
          <h2>Case Details</h2>
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
                    <div className='bookingcase_dha_case_detail_service_type'>
                        <div className='bookingcase_dha_case_detail_service_name'>
                            <h3>Service Type:</h3>
                            <p>Non Urgent case</p>

                        </div>
                    </div>
                    <div className='bookingcase_dha_case_detail_symptom'>
                        <div className='bookingcase_dha_case_deatil_symptom_1'>
                            <div className='bookingcase_dha_case_detail_symptom_left'>
                                <div className='bookingcase_dha_case_detail_symptom_left_1'>Symptom 1</div>
                                <div className='bookingcase_dha_case_detail_symptom_left_1'>Symptom 2</div>
                                <div className='bookingcase_dha_case_detail_symptom_left_1'>Symptom 3</div>
                            </div>
                            <div className='bookingcase_dha_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='bookingcase_dha_case_detail_complet'>
                        <div className='bookingcase_dha_case_detail_completion'><p>Completed</p></div>
                        <div className='bookingcase_dha_case_detail_time'>
                
                            <p className='bookingcase_dha_case_detail_time_1'><PiCalendarBlankLight className='bookingcase_calen'/>13 june,2023</p>
                            <p className='bookingcase_dha_case_detail_time_2'><CiClock2 className='bookingcase_dha_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>

                    <div className='bookingcase_dha_case_detail_para'>
                        <div className='bookingcase_dha_case_detail_para_main'>
                            <div className='bookingcase_dha_case_detail_para_main_left'>
                                <h4>Patient's Note</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <div className='bookingcase_dha_case_detail_para_main_right'>
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
                <div className='bookingcase_third_container_right_dha_case_details'>
                    <div className='bookingcase_third_container_right_case_details_first'>
                        <div className='bookingcase_third_container_right_case_details_first_1'>
                            <h2>Order details</h2>
                        </div>
                        <div className='bookingcase_third_container_right_case_details_first_2'>
                            <ul>
                                <li className='bookingcase_third_container_right_case_details_first_list'>Service 1</li>
                                <li className='bookingcase_third_container_right_case_details_first_item'>Rs 546</li>
                            </ul>
                        </div>
                        <div className='bookingcase_third_container_right_case_details_first_3'>
                            <ul>
                                <li className='bookingcase_third_container_right_case_details_first_list'>GST</li>
                                <li className='bookingcase_third_container_right_case_details_first_item'>Rs 78</li>
                            </ul>
                        </div>
                        <div className='bookingcase_third_container_right_case_details_first_4'>
                            <ul>
                                <li className='bookingcase_third_container_right_case_details_first_list'>Other Charges</li>
                                <li className='bookingcase_third_container_right_case_details_first_item'>Rs 78</li>
                                
                            </ul>
                        </div>

                        <div className='bookingcase_third_container_right_case_details_first_5'>
                            <ul>
                                <li className='bookingcase_third_container_right_case_details_first_list'>Sub Total</li>
                                <li className='bookingcase_third_container_right_case_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='bookingcase_third_container_right_case_details_first_6'>
                            <ul>
                                <li className='bookingcase_third_container_right_case_details_first_list'>Discount</li>
                                <li className='bookingcase_third_container_right_case_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='bookingcase_third_container_right_case_details_first_7'>
                            <ul>
                                <li className='bookingcase_third_container_right_case_details_first_list'>Total</li>
                                <li className='bookingcase_third_container_right_case_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                    </div>
                    
                    
                    

                    
                </div>

            </div>
    </div>
    <div className='bookingdhacase_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Pendingdhaurgentcase