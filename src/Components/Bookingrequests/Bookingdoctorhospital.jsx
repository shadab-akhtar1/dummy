import React,{useState} from 'react';
import './Bookingdoctorhospital.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';
import Dhaimage from '../Assets/Ellipse 2.jpg';
import Navbars from '../Dhamanagement/Navbars';
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";


export const Bookingdoctorhospital = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
    const [isActive, setIsActive]= useState(false);
  return (
    <>
    <div><Navbars/></div>

    <div className='bookingrequestdoctor_hospital_pharmacy_management_container'>
        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_1'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_heading_box_1'><h2>Dashboard</h2></div>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_heading_box_3'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_heading_box_2'><p>Availability</p>
            
                </div>
                <div className='doctortoggle_hospital_booking_div'>
                    <div  className='doctortoggle_hospital_booking'></div>
                    {toggleButton?<div onClick={handleClick} className='doctortoggle_hospital_booking_left'></div>:
                    <div onClick={handleClick}className='doctortoggle_hospital_booking_right'></div>}
                
                </div>
            </div>
        </div>
        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2_1'>
            <Link to={"/bookingrequestdha"} className='bookingrequestdoctor_hospital_medicine_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2_p_1'>DHA</div>
            </Link>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2_p_3'>Doctor</div>
            <Link to={"/bookingrequestpharmacy"} className='bookingrequestdoctor_hospital_medicine_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2_p_2'>Pharmacy</div>
            </Link>
            <Link to={"/bookingrequestlab"} className='bookingrequestdoctor_hospital_medicine_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2_p_2'>Lab</div>
            </Link>
            </div>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_2_2'>
                Sort by <FaCaretDown className='bookingrequestdoctor_hospital_pharmacy_management_icon'/>
            </div>
        </div>
        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_4'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_4_urgent'onClick={(e)=> setIsActive(!isActive)}>Non Urgent Care <FaCaretDown className='bookingrequestdoctor_hospital_pharmacy_management_container_4_icon'/></div>
            {isActive &&(
              <div className='bookingpending_dropdown_content_drop'>
                <Link to={"/bookingrequestdoctor"}>
                <div className='bookingpending_dropdown_item_drop'>Urgent Care</div>
                </Link>
                

              </div>
              )}
        </div>
        
        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3'>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                </div>

                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_2'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                    
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                    
                

            </div>
            </Link>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_3'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_4'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_4'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_4'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                

            </div>
            </Link>
            <Link to={"/bookingdoctorcase"} className='bookingrequestdoctor_hospital_pahrma_boking_link'>
            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_4'>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdoc_calen'/>13 June, 2023</div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdoc_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_hospital_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_hospital_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_hospital_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='booking_pendingdoctorhospital_container_card_last'>
                        <div className='booking_pendingdoctorhospital_container_card_last_up'>Assigned DHA</div>
                        <div className='booking_pendingdoctorhospital_container_card_last_down'>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_left'>
                                <img src={Dhaimage} alt="" />
                            </div>
                            <div className='booking_pendingdoctorhospital_container_card_last_down_right'>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_1'>DHA Name</div>
                                <div className='booking_pendingdoctorhospital_container_card_last_down_right_2'>Degree</div>
                            </div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_hospital_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>
                

            </div>
            </Link>

        </div>


        <div className='bookingrequestdoctor_hospital_pharmacy_pagination'>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretDoubleLeftBold className='bookingrequestdoctor_hospital_pharma_less_1'/></a>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretLeftBold className='bookingrequestdoctor_hospital_pharma_less_doctor'/></a>
                    <a href=''className='bookingrequestdoctor_anch_active'>1</a>
                    <a href='' className='bookingrequestdoctor_anchi'>2</a>
                    <a href='' className='bookingrequestdoctor_anchi'>3</a>
                    <a href='' className='bookingrequestdoctor_anchi'>...</a>
                    <a href='' className='bookingrequestdoctor_anchi'>10</a>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretRightBold className='bookingrequestdoctor_hospital_pharma_less_doctor'/></a>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretDoubleRightBold className='bookingrequestdoctor_hospital_pharma_less_doctor'/></a>

                </div>

    </div>
    <div className='bookingrequestdoctor_hospital_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdoctorhospital