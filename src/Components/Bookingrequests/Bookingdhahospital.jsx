import React,{useState} from 'react';
import './Bookingdhahospital.css';
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
import Navbars from '../Dhamanagement/Navbars';
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

export const Bookingdhahospital = () => {
  const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
    const [isActive, setIsActive]= useState(false);
    const [hisActive, setHisActive]= useState(false);
  return (
    <>
    <div><Navbars/></div>

    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container'>
        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_1'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_heading_box_1'><h2>Dashboard</h2></div>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_heading_box_3'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_heading_box_2'><p>Availability</p>
            
                </div>
                <div className='bookingdhahospital_toggle_booking_div'>
                    <div  className='bookingdhahospital_toggle_booking'>
                    {toggleButton?<div onClick={handleClick} className='bookingdhahospital_toggle_booking_left'></div>:
                    <div onClick={handleClick}className='bookingdhahospital_toggle_booking_right'></div>}
                    </div>
                </div>
            </div>
        </div>
        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2_1'>
            
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2_p_1'>DHA</div>
            
            <Link to={"/bookingrequestdoctor"} className='bookingdhahospital_bookingrequest_medicine_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2_p_2'>Doctor</div>
            </Link>
            <Link to={"/bookingrequestpharmacy"} className='bookingdhahospital_bookingrequest_medicine_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2_p_2'>Pharmacy</div>
            </Link>
            <Link to={"/bookingrequestlab"} className='bookingdhahospital_bookingrequest_medicine_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2_p_2'>Lab</div>
            </Link>
            </div>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_2_2'onClick={(e)=> setHisActive(!hisActive)}>
                Sort by <FaCaretDown className='bookingdhahospital_bookingrequest_pharmacy_management_icon'/>
            </div>
            {hisActive &&(
              <div className='bookingrequest_dropdown_content_drop'>
                <Link to={""}>
                <div className='bookingrequest_dropdown_item_drop'>Sort by</div>
                </Link>
                

              </div>
              )}
        </div>
        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_4'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_4_urgent'onClick={(e)=> setIsActive(!isActive)}>Standalone <FaCaretDown className='bookingdhahospital_bookingrequest_pharmacy_management_container_4_icon'/></div>
            {isActive &&(
              <div className='bookingpending_dropdown_content_drop'>
                <Link to={"/bookingrequestdha"}>
                <div className='bookingpending_dropdown_item_drop'>Urgent Care</div>
                </Link>
                

              </div>
              )}
        </div>
        
        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3'>
        <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
           
            
            
            
            <Link to={"/bookingdhacase"} className='pahrma_boking_link'>
            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='bookingreqdha_calen'/>13 June, 2023</div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='bookingreqdha_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingdhahospital_bookingrequest_phar_vaac_1'>Booked For : 18-20 June , 11:00 AM - 2:00 PM </div></div>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_up_box2_right_1'><button>Nursing</button></div>
                        
                        
                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_right_down_3'>
                        Earning : 4400
                        </div>

                    </div>
                </div>
                <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingdhahospital_bookingrequest_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>

        </div>


        <div className='bookingdhahospital_bookingrequest_pharmacy_pagination'>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'><PiCaretDoubleLeftBold className='bookingdhahospital_bookingrequest_pharma_less_1'/></a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'><PiCaretLeftBold className='bookingdhahospital_bookingrequest_pharma_less_doctor'/></a>
                    <a href=''className='bookingdhahospital_bookingrequest_anch_active'>1</a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'>2</a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'>3</a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'>...</a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'>10</a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'><PiCaretRightBold className='bookingdhahospital_bookingrequest_pharma_less_doctor'/></a>
                    <a href='' className='bookingdhahospital_bookingrequest_anchi'><PiCaretDoubleRightBold className='bookingdhahospital_bookingrequest_pharma_less_doctor'/></a>

                </div>

    </div>
    <div className='bookingdhahospital_bookingrequest_footer_pharmacy'><Footer/></div>
    
    </>
  )
}
export default Bookingdhahospital