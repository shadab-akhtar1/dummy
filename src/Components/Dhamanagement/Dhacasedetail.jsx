import React from 'react';
import './Dhacasedetail.css';

import {PiArrowLeftFill} from 'react-icons/pi';

import userpic from "../Assets/Ellipse 3.jpg";
import elipse from "../Assets/Ellipse 2.jpg";
import dhaimage from "../Assets/Image.jpg";
import { Link } from 'react-router-dom';
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import vid from "../Assets/Frame 12431.jpg";
import {Navbars} from '../Dhamanagement/Navbars';


export const Dhacasedetail = () => {
  return (
    <>
    
    <div><Navbars/></div>

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
                        <div className='dha_case_detail_para_bottom'>
                            <div className='dha_case_detail_para_bottom_head'><h3>Vitals Recorded by DHA</h3></div>
                            <div className='dha_case_detail_para_bottom_mid'>
                                <div className='dha_case_detail_para_bottom_mid_left'>
                                <img src={elipse} alt="" />
                                    <div className='dha_case_detail_para_bottom_mid_left_list'>
                                    
                                        <ul>
                                            <li className='dha_case_detail_list'>DHA Name</li>
                                            <li className='dha_case_detail_list_item'>Degree</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='dha_case_detail_para_bottom_mid_right'>
                                    <p>< MdCall className='dha_case_detail_call'/>+91 123 456 7890</p>
                                </div>
                            </div>
                            <div className='dha_case_detail_para_bottom_bot'>
                                <button>View Vitals Report</button>
                            </div>

                        </div>
                        <div className='dha_case_detail_lower'>
                            <div className='dha_case_detail_lower_1'><h2>Referred to Speciality</h2></div>
                            <div className='dha_case_detail_lower_2'>
                                <div className='dha_case_detail_lower_2_image'>
                                <img src={dhaimage} alt="" />
                                </div>
                                <div className='dha_case_detail_lower_2_low'>
                                <ul>
                                    <li className='dha_case_detail_lower_2_low_list'>Courtney Henry</li>
                                    <li className='dha_case_detail_lower_2_low_list_item'> Physiotherapist</li>
                                </ul>
                                </div>
                            </div>

                        </div>
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
                    
                    
                    

                    <div className='dha_case_detail_box'>
                        <div className='dha_case_detail_box_1'>
                            <div className='dha_case_detail_box1_up'>
                                
                                    <span className='dha_case_detail_indicator'></span>
                            
                            </div>
                            <div className='dha_case_detail_header_add'>
                            <div className='dha_case_detail_container'></div>
                            <div className='dha_case_detail_container_1'></div>
                            <div className='dha_case_detail_container_2'></div>
                            </div>
                        </div>
                        <div className='dha_case_detail_box2'>
                            <div className='dha_case_detail_box2_1'>
                                <ul>
                                    <li className='dha_list_item_case'>Prescription Details</li>
                                    <li className='dha_list_item_case2'>Assigned</li>
                                </ul>
                            </div>
                            <div className='dha_case_detail_box2_1'>
                                <ul>
                                    <li className='dha_list_item_case'>Service Started</li>
                                    <li className='dha_list_item_case2'>18 june,2023</li>
                                </ul>
                            </div>
                            <div className='dha_case_detail_box2_1'>
                                <ul>
                                    <li className='dha_list_item_case'>Completed</li>
                                    <li className='dha_list_item_case2'>18 June,2023</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                </div>

            </div>
    </div>
    
    </>
  )
}
export default Dhacasedetail