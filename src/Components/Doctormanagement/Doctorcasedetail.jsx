import React,{useState} from 'react';
import './Doctorcasedetail.css';
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
import aadhar from '../Assets/aadhaar-card-dummy.png';
import medpic from '../Assets/image 201.png';
import Navbars from '../Dhamanagement/Navbars';
import { MdKeyboardArrowUp } from "react-icons/md";

export const Doctorcasedetail = () => {
    const [med, setMed] = useState(false);

  const toggleMed = () => {
    setMed(!med);
  };

  if(med) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };

  if(form) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>

<div><Navbars/></div>

    <div className='middle_container_doctor_case_details'>
      <div className='middle_container_heading_doctor_case_details'>
        <div className='middle_container_heading_1_doctor_case_details'>
            <Link to={"/dhadetailsview"}>
            <div className='arrdoctor_div'>< PiArrowLeftFill className='details_arrow_case_doctor'/></div>
            </Link>
            <h2>Case Details</h2>
        </div>
       </div>

            <div className='third_container_doctor_case_details'>
                <div className='third_container_left_doctor_case_details'>
                    <div className='doctor_case_details_userprofile'>
                        <div className='doctor_case_details_userprofile_profile'>
                        <img src={userpic} alt="userimage" />
                        </div>
                        <div className='doctor_case_details_userprofile_info'>
                            <ul>
                                <li className='doctor_li_1_case'>Patient Name</li>
                                <li className='doctor_li_2_case'>xyz,street name</li>
                                <li className='doctor_li_3_case'>Age:32|Gender:Male|Blood Group:O+</li>
                                <li className='doctor_li_4_case'>Height:6"3inches|Weight:76</li>
                            </ul>
                        </div>
                    </div>
                    <div className='doctor_case_detail_complet'>
                        <div className='doctor_case_detail_completion'><p>Request For</p></div>
                        <div className='doctor_case_detail_time'>
                
                            <p className='doctor_case_detail_time_1'><PiCalendarBlankLight className='calen_doctor'/>13 june,2023</p>
                            <p className='doctor_case_detail_time_2'><CiClock2 className='doctor_case_detail_clock'/>09:00AM</p>
                        </div>
                    </div>
                    <div className='doctor_case_detail_symptom'>
                        <div className='doctor_case_deatil_symptom_1'>
                            <div className='doctor_case_detail_symptom_left'>
                                <div className='doctor_case_detail_symptom_left_1'>Symptom 1</div>
                                <div className='doctor_case_detail_symptom_left_1'>Symptom 2</div>
                                <div className='doctor_case_detail_symptom_left_1'>Symptom 3</div>
                            </div>
                            <div className='doctor_case_detail_symptom_right'>
                                <button>View Prescription</button>
                            </div>
                        </div>

                    </div>
                    <div className='doctor_case_detail_service_type'>
                        <div className='doctor_case_detail_service_name'>
                            <h3>Service Type:</h3>
                            <p>Non Urgent case</p>

                        </div>
                    </div>
                    <div className='doctor_case_detail_para'>
                    <div className='doctor_case_detail_para_left'>
                        
                            <div className='doctor_case_detail_container_1'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            
                            <div className='doctor_case_detail_container_2'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_3'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_4'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_5'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_6'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_7'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_8'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                            <div className='doctor_case_detail_container_9'><div ><IoCheckmark className='doctor_check_mark' /></div></div>
                    
                        </div>
                       
                        <div className='doctor_case_detail_para_right'>
                            <div className='doctor_case_detail_para_right_1'>
                                <div className='doctor_case_detail_para_right_1_up'>
                                    <div className='doctor_case_detail_para_content'>
                                        <h4>Created</h4>
                                        <p>17, June 2023 | 08:00 AM</p>

                                    </div>
                                    <div className='doctor_case_detail_para_icon'>
                                        <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                    </div>
                                
                                </div>
                                <div className='doctor_case_detail_para_right_1_down'>
                                    
                                        <div className='doctor_case_detail_para_main_left'>
                                            <h4>Patient's Note</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                        <div className='doctor_case_detail_para_main_right'>
                                            <h4>Patient's Video</h4>
                                            <img src={vid} alt="" />
                                        </div>
                                    

                                </div>
                            </div>
                            <div className='doctor_case_detail_para_right_2'>
                                <div className='doctor_case_detail_para_right_2_up'>
                                    <div className='doctor_case_detail_para_content_2'>
                                        <h4>DHA Assigned</h4>
                                        <p>17, June 2023</p>

                                    </div>
                                    <div className='doctor_case_detail_para_icon'>
                                        <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                <div className='doctor_case_detail_para_right_2_down'>
                                    <div className='doctor_case_detail_para_main_left_2_left'>
                                        <img src={elipse2} alt="" />
                                            <div className='doctor_case_detail_para_main_left_1_left'>
                                                <ul>
                                                    <li className='doctor_case_detail_list'>DHA Name</li>
                                                    <li className='doctor_case_detail_list_item'>Degree</li>
                                                </ul>
                                            </div>

                                    </div>
                                    <div className='doctor_case_detail_para_main_left_right'>
                                        <ul>
                                            <li>Details</li>
                                        </ul>

                                    </div>

                                </div>

                                
                            </div>

                            <div className='doctor_case_detail_para_right_3'>
                                    <div className='doctor_case_detail_para_right_3_up'>
                                        <div className='doctor_case_detail_para_content'>
                                            <h4>DHA Service Started</h4>
                                            <p>17, June 2023 | 08:00 AM</p>

                                        </div>
                                        <div className='doctor_case_detail_para_icon'>
                                            <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp/></div>
                                        </div>
                                
                                    </div>
                            </div>

                            <div className='doctor_case_detail_para_right_4'>
                                <div className='doctor_case_detail_para_right_2_up'>
                                    <div className='doctor_case_detail_para_content_2'>
                                        <h4>DHA Service Ended</h4>
                                        <p>17, June 2023</p>

                                    </div>
                                    <div className='doctor_case_detail_para_icon'>
                                        <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                <div className='doctor_case_detail_para_right_4_down'>
                                    <div className='doctor_case_detail_para_right_4_down_block'>
                                        <div className='doctor_case_detail_para_bottom_head'><h3>Vitals Recorded by DHA</h3></div>
                                        <div className='doctor_case_detail_para_bottom_mid'>
                                            <div className='doctor_case_detail_para_bottom_mid_left'>
                                                    <img src={elipse} alt="" />
                                                <div className='doctor_case_detail_para_bottom_mid_left_list'>
                                    
                                                    <ul>
                                                        <li className='doctor_case_detail_list'>DHA Name</li>
                                                        <li className='doctor_case_detail_list_item'>Degree</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='doctor_case_detail_para_bottom_mid_right'>
                                                <p>< MdCall className='doctor_case_detail_call'/>+91 123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className='doctor_case_detail_para_bottom_bot'>
                                            <button>View Vitals Report</button>
                                        </div>

                                    </div>

                                </div>
                                

                            </div>
                            <div className='doctor_case_detail_para_right_5'>
                                <div className='doctor_case_detail_para_right_2_up'>
                                    <div className='doctor_case_detail_para_content_2'>
                                        <h4>Doctor Assigned</h4>
                                        <p>17, June 2023</p>

                                    </div>
                                    <div className='doctor_case_detail_para_icon'>
                                        <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                <div className='doctor_case_detail_para_right_2_down'>
                                    <div className='doctor_case_detail_para_main_left_2_left'>
                                        <img src={elipse2} alt="" />
                                            <div className='doctor_case_detail_para_main_left_1_left'>
                                                <ul>
                                                    <li className='doctor_case_detail_list'>Doctor's Name</li>
                                                    <li className='doctor_case_detail_list_item'>Degree</li>
                                                </ul>
                                            </div>

                                    </div>
                                    <div className='doctor_case_detail_para_main_left_right'>
                                        <ul>
                                            <li>Details</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                            <div className='doctor_case_detail_para_right_6'>
                                <div className='doctor_case_detail_para_right_6_up'>
                                        <div className='doctor_case_detail_para_content'>
                                            <h4>Video Consultation</h4>
                                            <p>Remaining</p>

                                        </div>
                                        <div className='doctor_case_detail_para_icon'>
                                            <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp/></div>
                                        </div>
                                
                                </div>
                                <div className='doctor_case_detail_para_right_6_down'>
                                    <p>Chief Complaints</p>
                                    <div className='doctor_case_detail_para_right_6_down_down'>
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

                            <div className='doctor_case_detail_para_right_7'>
                                <div className='doctor_case_detail_para_right_2_up'>
                                    <div className='doctor_case_detail_para_content_2'>
                                        <h4>Prescription</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                    <div className='doctor_case_detail_para_icon'>
                                        <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                <div className='doctor_case_detail_para_right_2_down'>
                                    <div className='doctor_case_detail_para_main_left_2_left'>
                                        <p>Doctor's Prescription</p>
                                            

                                    </div>
                                    <div className='doctor_case_detail_para_main_left_right_7'>
                                        <ul>
                                            <li><button onClick={toggleMed} className='doctor_case_detail_para_main_left_right_7_button'>View</button></li>
                                            {med && (
                                                <div className="modal_doctor">
                                                        <div onClick={toggleMed} className="overlay_doctor"></div>
                                                        <div className="modal_content_doctor">
        
                                                            <img src={medpic} alt="" className='med_img_doc'/>
                                                            <button className="close_modal_doctor" onClick={toggleMed}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}
                                            <li><SlCloudDownload className='doctor_case_detail_para_main_left_right_7_icon'/></li>
                                        </ul>

                                    </div>

                                </div>


                            </div>
                            <div className='doctor_case_detail_para_right_8'>
                                <div className='doctor_case_detail_para_right_2_up'>
                                    <div className='doctor_case_detail_para_content_2'>
                                        <h4>Lab Test</h4>
                                        <p>18, June 2023</p>

                                    </div>
                                    <div className='doctor_case_detail_para_icon'>
                                        <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp /></div>
                                    </div>
                                </div>
                                <div className='doctor_case_detail_para_right_2_down'>
                                    <div className='doctor_case_detail_para_main_left_2_left'>
                                        <p>Lab Test</p>
                                            

                                    </div>
                                    <div className='doctor_case_detail_para_main_left_right_7'>
                                        <ul>
                                            <li><button onClick={toggleForm} className='doctor_case_detail_para_main_left_right_7_button'>View</button></li>
                                            {form && (
                                                <div className="modal_doctor">
                                                        <div onClick={toggleForm} className="overlay_doctor"></div>
                                                        <div className="modal_content_doctor_test">
        
                                                        
                                                                <div className='lab_test_heading'>
                                                                    <h3>Lab Test</h3>
                                                                </div>
                                                                <div className='lab_test_main'>
                                                                    <div className='lab_test_main_container'>
                                                                            <div className='lab_test_main_container_1'>
                                                                                <p>Prescribed by</p>
                                                                                <div className='lab_test_main_container_1_2'>
                                                                                    <img src={elipse2} alt="" />
                                                                                        <div className='lab_test_main_contains'>
                                                                                            <ul>
                                                                                                <li className='lab_test_main_contains_item'>Doctor Name</li>
                                                                                                <li className='lab_test_main_contains_item_list'>Degree</li>
                                                                                            </ul>
                                                                                        </div>

                                                                                </div>
                                                                                
                                                                            
                                                                            </div>
                                                                            <div className='lab_test_main_container_1'>
                                                                                <p>Performed by</p>
                                                                                <div className='lab_test_main_container_1_2'>
                                                                                    <img src={elipse2} alt="" />
                                                                                        <div className='lab_test_main_contains'>
                                                                                            <ul>
                                                                                                <li className='lab_test_main_contains_item'>Lab Name</li>
                                                                                                <li className='lab_test_main_contains_item_list'>Location</li>
                                                                                            </ul>
                                                                                        </div>

                                                                                </div>
                                                                                
                                                                            
                                                                            </div>
                                                                            <div className='lab_test_main_container_3'>
                                                                                <label className='last_test_main_container_3_label'>Select Date</label><br />
                                                                                <input type="date" className='lab_test_main_container_3_date'/>

                                                                            </div>
                                                                            <div className='lab_test_main_container_4'>
                                                                                <label className='lab_test_main_container_4_labe'>Lab Test</label><br />
                                                                                <input type="text" placeholder='Test 1' className='lab_test_main_container_4_inp'/><br />
                                                                                <input type="text" placeholder='Test 2' className='lab_test_main_container_4_input'/>

                                                                            </div>
                                                                    </div>
                                                                    <div className='lab_test_main_container'>
                                                                        <div className='lab_test_main_container_right_1'>
                                                                            <ul>
                                                                                <li>Lab Test 1</li>
                                                                                <li>300</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='lab_test_main_container_right_2'>
                                                                            <ul>
                                                                                <li>Lab test 2</li>
                                                                                <li>300</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='lab_test_main_container_right_3'>
                                                                            <ul>
                                                                                <li>taxes</li>
                                                                                <li>100</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className='lab_test_main_container_right_4'>
                                                                            <ul>
                                                                                <li>Total</li>
                                                                                <li>600</li>
                                                                            </ul>

                                                                        </div>

                                                                    </div>

                                                            

                                                                </div>
                                                            <button className="close_modal_doctor" onClick={toggleForm}>
                                                                CLOSE
                                                            </button>
                                                        </div>
                                                </div>
                                                )}
                                            <li><SlCloudDownload className='doctor_case_detail_para_main_left_right_7_icon'/></li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            <div className='doctor_case_detail_para_right_9'>
                                    <div className='doctor_case_detail_para_right_1_up'>
                                        <div className='doctor_case_detail_para_content'>
                                            <h4>Completed</h4>
                                            <p>Remaining</p>

                                        </div>
                                        <div className='doctor_case_detail_para_icon'>
                                            <div className='doctor_case_detail_para_icon_1'><MdKeyboardArrowUp/></div>
                                        </div>
                                
                                    </div>

                            </div>
                        </div>

                    </div>
                
                </div>
                <div className='third_container_right_doctor_case_details'>
                    <div className='third_container_right_doctorcase_details_first'>
                        <div className='third_container_right_doctorcase_details_first_1'>
                            <h2>Order details</h2>
                        </div>
                        <div className='third_container_right_doctorcase_details_first_2'>
                            <ul>
                                <li className='third_container_right_doctorcase_details_first_list'>Service 1</li>
                                <li className='third_container_right_doctorcase_details_first_item'>Rs 546</li>
                            </ul>
                        </div>
                        <div className='third_container_right_doctorcase_details_first_3'>
                            <ul>
                                <li className='third_container_right_doctorcase_details_first_list'>GST</li>
                                <li className='third_container_right_doctorcase_details_first_item'>Rs 78</li>
                            </ul>
                        </div>
                        <div className='third_container_right_doctorcase_details_first_4'>
                            <ul>
                                <li className='third_container_right_doctorcase_details_first_list'>Other Charges</li>
                                <li className='third_container_right_doctorcase_details_first_item'>Rs 78</li>
                                
                            </ul>
                        </div>

                        <div className='third_container_right_doctorcase_details_first_5'>
                            <ul>
                                <li className='third_container_right_doctorcase_details_first_list'>Sub Total</li>
                                <li className='third_container_right_doctorcase_details_first_item'> Rs 600</li>
                            </ul>
                        </div>
                        <div className='third_container_right_doctorcase_details_first_6'>
                            <ul>
                                <li className='third_container_right_doctorcase_details_first_list'>Discount</li>
                                <li className='third_container_right_doctorcase_details_first_item'>Rs 100</li>
                            </ul>
                        </div>

                        <div className='third_container_right_doctorcase_details_first_7'>
                            <ul>
                                <li className='third_container_right_doctorcase_details_first_list'>Total</li>
                                <li className='third_container_right_doctorcase_details_first_item'>Rs 500</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
    </div>
    </>
  )
}

export default Doctorcasedetail
