import React,{useState} from 'react';
import './Bookingrequestdoctor.css';
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

export const Bookingrequestdoctor = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
  return (
    <>
    <nav className='bookingrequestsdoctor_pharmabooking_navbar_doctorcase'>
        <div className='bookingrequestsdoctor_pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='bookingrequestsdoctor_pharmabooking_nav_links_doctorcase'>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='bookingrequestsdoctor_pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_doctorcase'><FaBell className='bookingrequestsdoctor_pharmabooking_icons_bell_doctorcase'/></li>
            <li className='bookingrequestsdoctor_pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='bookingrequestsdoctor_pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>

    <div className='bookingrequestdoctor_pharmacy_management_container'>
        <div className='bookingrequestdoctor_pharmacy_management_container_1'>
            <div className='bookingrequestdoctor_pharmacy_management_heading_box_1'><h2>Dashboard</h2></div>
            <div className='bookingrequestdoctor_pharmacy_management_heading_box_3'>
                <div className='bookingrequestdoctor_pharmacy_management_heading_box_2'><p>Availability</p>
            
                </div>
                <div className='doctortoggle_booking_div'>
                    <div  className='doctortoggle_booking'></div>
                    {toggleButton?<div onClick={handleClick} className='doctortoggle_booking_left'></div>:
                    <div onClick={handleClick}className='doctortoggle_booking_right'></div>}
                
                </div>
            </div>
        </div>
        <div className='bookingrequestdoctor_pharmacy_management_container_2'>
            <div className='bookingrequestdoctor_pharmacy_management_container_2_1'>
            <Link to={""} className='bookingrequestdoctor_medicine_link'>
            <div className='bookingrequestdoctor_pharmacy_management_container_2_p_1'>DHA</div>
            </Link>
            <div className='bookingrequestdoctor_pharmacy_management_container_2_p_3'>Doctor</div>
            <div className='bookingrequestdoctor_pharmacy_management_container_2_p_2'>Pharmacy</div>
            <div className='bookingrequestdoctor_pharmacy_management_container_2_p_2'>Lab</div>
            </div>
            <div className='bookingrequestdoctor_pharmacy_management_container_2_2'>
                Sort by <FaCaretDown className='bookingrequestdoctor_pharmacy_management_icon'/>
            </div>
        </div>
        <div className='bookingrequestdoctor_pharmacy_management_container_4'>
            <div className='bookingrequestdoctor_pharmacy_management_container_4_urgent'>Urgent Case <FaCaretDown className='bookingrequestdoctor_pharmacy_management_container_4_icon'/></div>

        </div>
        
        <div className='bookingrequestdoctor_pharmacy_management_container_3'>
            <Link to={"/"} className='bookingrequestdoctor_pahrma_boking_link'>
            <div className='bookingrequestdoctor_pharmacy_management_container_3_1'>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_phar_vaac_1'>Symptom 1</div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_phar_vaac_2'>Symptom 2 </div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_phar_vaac_3'>Symptom 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={""} className='bookingrequestdoctor_pahrma_boking_link'>
            <div className='bookingrequestdoctor_pharmacy_management_container_3_2'>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/pharmabooking"} className='bookingrequestdoctor_pahrma_boking_link'>
            <div className='bookingrequestdoctor_pharmacy_management_container_3_3'>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/pharmabooking"} className='bookingrequestdoctor_pahrma_boking_link'>
            <div className='bookingrequestdoctor_pharmacy_management_container_3_4'>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequestdoctor_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequestdoctor_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequestdoctor_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_1'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_right_down_2'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        

                    </div>
                </div>
                <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down'>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_left'>
                        <button>Accept</button>
                    </div>
                    <div className='bookingrequestdoctor_pharmacy_management_container_3_1_down_down_right'>
                        <button>Reject</button>
                    </div>
                </div>

            </div>
            </Link>

        </div>


        <div className='bookingrequestdoctor_pharmacy_pagination'>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretDoubleLeftBold className='bookingrequestdoctor_pharma_less_1'/></a>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretLeftBold className='bookingrequestdoctor_pharma_less_doctor'/></a>
                    <a href=''className='bookingrequestdoctor_anch_active'>1</a>
                    <a href='' className='bookingrequestdoctor_anchi'>2</a>
                    <a href='' className='bookingrequestdoctor_anchi'>3</a>
                    <a href='' className='bookingrequestdoctor_anchi'>...</a>
                    <a href='' className='bookingrequestdoctor_anchi'>10</a>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretRightBold className='bookingrequestdoctor_pharma_less_doctor'/></a>
                    <a href='' className='bookingrequestdoctor_anchi'><PiCaretDoubleRightBold className='bookingrequestdoctor_pharma_less_doctor'/></a>

                </div>

    </div>
    <div className='bookingrequestdoctor_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingrequestdoctor
