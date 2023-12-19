import React from 'react';
import './Pendingcasecompleted.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import {BiArrowBack} from 'react-icons/bi';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {PiArrowLeftFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import userpic from "../Assets/Ellipse 3.jpg";
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import vid from "../Assets/Frame 12431.jpg";
import elipse2 from "../Assets/Ellipse 2.png";
import elipse from "../Assets/Ellipse 2.jpg";
import { MdCall } from "react-icons/md";
import { SlCloudDownload } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";
import {Navbars} from '../Dhamanagement/Navbars';
import { MdKeyboardArrowUp } from "react-icons/md";

export const Pendingcasecompleted = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='pendingcasecompleted_middle_container_doctor_pending_details'>
    <div className='pendingcasecompleted_middle_container_heading_doctor_pending_details'>
      <div className='pendingcasecompleted_middle_container_heading_1_doctor_pending_details'>
          <Link to={"/bookingpendingdha"}>
          <div className='pendingcasecompleted_arrdoctor_div_pending'>< PiArrowLeftFill className='pendingcasecompleted_details_arrow_pending_doctor'/></div>
          </Link>
          <h2>Case Details</h2>
      </div>
     </div>

          <div className='pendingcasecompleted_third_container_doctor_pending_details'>
              <div className='pendingcasecompleted_third_container_left_doctor_pending_details'>
                  <div className='pendingcasecompleted_doctor_pending_details_userprofile'>
                      <div className='pendingcasecompleted_doctor_pending_details_userprofile_profile'>
                      <img src={userpic} alt="userimage" />
                      </div>
                      <div className='pendingcasecompleted_doctor_pending_details_userprofile_info'>
                          <ul>
                              <li className='pendingcasecompleted_doctor_li_1_pending'>Patient Name</li>
                              <li className='pendingcasecompleted_doctor_li_2_pending'>xyz,street name</li>
                              <li className='pendingcasecompleted_doctor_li_3_pending'>Age:32|Gender:Male|Blood Group:O+</li>
                              <li className='pendingcasecompleted_doctor_li_4_pending'>Height:6"3inches|Weight:76</li>
                          </ul>
                      </div>
                  </div>
                  <div className='pendingcasecompleted_doctor_pending_detail_complet'>
                      <div className='pendingcasecompleted_doctor_pending_detail_completion'><p>Request For</p></div>
                      <div className='pendingcasecompleted_doctor_pending_detail_time'>
              
                          <p className='pendingcasecompleted_doctor_pending_detail_time_1'><PiCalendarBlankLight className='pendingcasecompleted_calen_doctor_pending'/>13 june,2023</p>
                          <p className='pendingcasecompleted_doctor_pending_detail_time_2'><CiClock2 className='pendingcasecompleted_doctor_pending_detail_clock'/>09:00AM</p>
                      </div>
                  </div>
                  <div className='pendingcasecompleted_doctor_pending_detail_symptom'>
                      <div className='pendingcasecompleted_doctor_pending_deatil_symptom_1'>
                          <div className='pendingcasecompleted_doctor_pending_detail_symptom_left'>
                              <div className='pendingcasecompleted_doctor_pending_detail_symptom_left_1'>Symptom 1</div>
                              <div className='pendingcasecompleted_doctor_pending_detail_symptom_left_1'>Symptom 2</div>
                              <div className='pendingcasecompleted_doctor_pending_detail_symptom_left_1'>Symptom 3</div>
                          </div>
                          <div className='pendingcasecompleted_doctor_pending_detail_symptom_right'>
                              <button>View Prescription</button>
                          </div>
                      </div>

                  </div>
                  <div className='pendingcasecompleted_doctor_pending_detail_service_type'>
                      <div className='pendingcasecompleted_doctor_pending_detail_service_name'>
                          <h3>Service Type:</h3>
                          <p>Non Urgent case</p>

                      </div>
                  </div>
                  <div className='pendingcasecompleted_doctor_pending_detail_para'>
                    <div className='pendingcasecompleted_doctor_pending_detail_para_left'>
                      
                          <div className='pendingcasecompleted_doctor_pending_detail_container_1'><div ><IoCheckmark className='pendingcasecompleted_doctor_check_mark_pending' /></div></div>
                          
                          <div className='pendingcasecompleted_doctor_pending_detail_container_2'><div ><IoCheckmark className='pendingcasecompleted_doctor_check_mark_pending' /></div></div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_3'><div ><IoCheckmark className='pendingcasecompleted_doctor_check_mark_pending' /></div></div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_4'><div ><IoCheckmark className='pendingcasecompleted_doctor_check_mark_pending' /></div></div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_5'><div ><IoCheckmark className='pendingcasecompleted_doctor_check_mark_pending' /></div></div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_6'>06</div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_7'>07</div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_8'>08</div>
                          <div className='pendingcasecompleted_doctor_pending_detail_container_9'>09</div>
                  
                      </div>
                     
                      <div className='pendingcasecompleted_doctor_pending_detail_para_right'>
                        
                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_1'>
                          <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_1_up'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_content'>
                                      <h4>Created</h4>
                                      <p>17, June 2023 | 08:00 AM</p>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                  </div>
                              
                              </div>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_1_down'>
                                  
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_main_left'>
                                          <h4>Patient's Note</h4>
                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                      </div>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_main_right'>
                                          <h4>Patient's Video</h4>
                                          <img src={vid} alt="" />
                                      </div>
                                  

                              </div>
                              </div>
                          </div>
                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_2'>
                            <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_up'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_content_2'>
                                      <h4>DHA Assigned</h4>
                                      <p>17, June 2023</p>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                    <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                  </div>
                              </div>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_down'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_main_left_2_left'>
                                      <img src={elipse2} alt="" />
                                          <div className='pendingcasecompleted_doctor_pending_detail_para_main_left_1_left'>
                                              <ul>
                                                  <li className='pendingcasecompleted_doctor_pending_detail_list'>DHA Name</li>
                                                  <li className='pendingcasecompleted_doctor_pending_detail_list_item'>Degree</li>
                                              </ul>
                                          </div>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_main_left_right'>
                                      <ul>
                                          <li>Details</li>
                                      </ul>

                                  </div>

                              </div>

                            </div>

                              
                          </div>

                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_3'>
                            <div className='pendingcasecompleted_5_2'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_right_3_up'>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_content'>
                                          <h4>DHA Service Started</h4>
                                          <p>17, June 2023 | 08:00 AM</p>

                                      </div>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                          <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp/></div>
                                      </div>
                              
                                  </div>
                            </div>
                          </div>

                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_4'>
                            <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_up'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_content_2'>
                                      <h4>DHA Service Ended</h4>
                                      <p>17, June 2023</p>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                    <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                  </div>
                              </div>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_4_down'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_right_4_down_block'>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_bottom_head'><h3>Vitals Recorded by DHA</h3></div>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_bottom_mid'>
                                          <div className='pendingcasecompleted_doctor_pending_detail_para_bottom_mid_left'>
                                                  <img src={elipse} alt="" />
                                              <div className='pendingcasecompleted_doctor_pending_detail_para_bottom_mid_left_list'>
                                  
                                                  <ul>
                                                      <li className='pendingcasecompleted_doctor_pending_detail_list'>DHA Name</li>
                                                      <li className='pendingcasecompleted_doctor_pending_detail_list_item'>Degree</li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className='pendingcasecompleted_doctor_pending_detail_para_bottom_mid_right'>
                                              <p>< MdCall className='pendingcasecompleted_doctor_pending_detail_call'/>+91 123 456 7890</p>
                                          </div>
                                      </div>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_bottom_bot'>
                                          <button>View Vitals Report</button>
                                      </div>

                                  </div>

                              </div>
                              </div>
                              

                          </div>
                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_5'>
                            <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_up'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_content_2'>
                                      <h4>Doctor Assigned</h4>
                                      <p>17, June 2023</p>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                    <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                  </div>
                              </div>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_down'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_main_left_2_left'>
                                      <img src={elipse2} alt="" />
                                          <div className='pendingcasecompleted_doctor_pending_detail_para_main_left_1_left'>
                                              <ul>
                                                  <li className='pendingcasecompleted_doctor_pending_detail_list'>DHA Name</li>
                                                  <li className='pendingcasecompleted_doctor_pending_detail_list_item'>Degree</li>
                                              </ul>
                                          </div>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_main_left_right'>
                                      <ul>
                                          <li>Details</li>
                                      </ul>

                                  </div>

                              </div>
                              </div>
                              

                          </div>

                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_6'>
                            <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_6_up'>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_content'>
                                          <h4>Video Consultation</h4>
                                          <p>Remaining</p>

                                      </div>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                        <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                      </div>
                              
                              </div>
                              <div className='pendingcasecompleted_doctor_case_detail_para_right_6_down'>
                                    <p>Chief Complaints</p>
                                    <div className='pendingcasecompleted_doctor_case_detail_para_right_6_down_down'>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Duis sit amet felis venenatis orci feugiat posuere ut eget purus.</li>
                                            <li>Sed tempus risus eu vestibulum vestibulum.</li>
                                            <li>Etiam malesuada erat sed sapien gravida, in dignissim elit congue.</li>
                                            <li>Phasellus euismod lacus a nisi volutpat, a convallis tortor euismod.</li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                              

                              

                          </div>

                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_7'>
                            <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_up'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_content_2'>
                                      <h4>Prescription</h4>
                                      <p>18, June 2023</p>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                    <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                  </div>
                              </div>
                              <div className='pendingcasecompleted_doctor_prescription'>Doctor's Prescription</div>

                              </div>


                          </div>
                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_8'>
                            <div className='pendingcasecompleted_5_2'>
                              <div className='pendingcasecompleted_doctor_pending_detail_para_right_2_up'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_content_2'>
                                      <h4>Lab Test</h4>
                                      <p>18, June 2023</p>

                                  </div>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                    <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                  </div>
                              </div>
                              <div className='pendingcasecompleted_doctor_prescription'>Doctor's Prescription</div>
                            </div>
                              

                          </div>
                          <div className='pendingcasecompleted_doctor_pending_detail_para_right_9'>
                            <div className='pendingcasecompleted_5_2_1'>
                                  <div className='pendingcasecompleted_doctor_pending_detail_para_right_9_up'>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_content'>
                                          <h4>Completed</h4>
                                          <p>Remaining</p>

                                      </div>
                                      <div className='pendingcasecompleted_doctor_pending_detail_para_icon'>
                                          <div className='pendingcasecompleted_doctor_pending_detail_para_icon_1'><MdKeyboardArrowUp/></div>
                                      </div>
                              
                                  </div>
                            </div>

                          </div>
                      </div>

                  </div>
              
              </div>
              <div className='pendingcasecompleted_third_container_right_doctor_pending_details'>
                  <div className='pendingcasecompleted_third_container_right_doctorpending_details_first'>
                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_1'>
                          <h2>Order details</h2>
                      </div>
                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_2'>
                          <ul>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_list'>Service 1</li>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_item'>Rs 546</li>
                          </ul>
                      </div>
                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_3'>
                          <ul>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_list'>GST</li>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_item'>Rs 78</li>
                          </ul>
                      </div>
                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_4'>
                          <ul>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_list'>Other Charges</li>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_item'>Rs 78</li>
                              
                          </ul>
                      </div>

                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_5'>
                          <ul>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_list'>Sub Total</li>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_item'> Rs 600</li>
                          </ul>
                      </div>
                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_6'>
                          <ul>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_list'>Discount</li>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_item'>Rs 100</li>
                          </ul>
                      </div>

                      <div className='pendingcasecompleted_third_container_right_doctorpending_details_first_7'>
                          <ul>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_list'>Total</li>
                              <li className='pendingcasecompleted_third_container_right_doctorpending_details_first_item'>Rs 500</li>
                          </ul>
                      </div>

                  </div>
              </div>

          </div>
  </div>
    </>
  )
}
export default Pendingcasecompleted