import React,{useState} from 'react';
import './pharmamedicine.css';
import {Navbar} from '../Dhamanagement/Navbar';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';
import {Link} from 'react-router-dom';
import { BsToggle2On } from "react-icons/bs";


export const Pharmamedicine = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
  return (
    <>
    <div className='pharmacy_medicine'><Navbar/></div>
    <div className='pharmacy_medicine_container'>
        <div className='pharmacy_medicine_container_1'>
            <div className='pharmacy_medicine_heading_box_1'><h2>Dashboard</h2></div>
            <div className='pharmacy_medicine_heading_box_2'>
                <Link to={"/addpharma"}>
            <button className='pharmacy_medicine_add_pharmacy_btn'>Add Pharmacy</button>
                </Link>
                
                <p className='pharma_medicine_p_tag'>Availability</p>
                <div className='toggle_div'>
                <div  className='toggle'></div>
                    {toggleButton?<div onClick={handleClick} className='toggle_left'></div>:
                    <div onClick={handleClick}className='toggle_right'></div>}
                
                </div>

            
            </div>

        </div>
        <div className='pharmacy_medicine_container_2'>
            <div className='pharmacy_medicine_container_2_p_1'>Medicines</div>
            <Link to={"/pharmacymanagement"} className='vaccine_link'>
            <div className='pharmacy_medicine_container_2_p_2'>Vacination</div>
            </Link>
            
        </div>

        <div className='pharmacy_medicine_container_3'>
            <Link to={"/pharmabooking"} className='pahrma_booking_done_link'>
            <div className='pharmacy_medicine_container_3_1'>
                <div className='pharmacy_medicine_container_3_1_up'>
                    <div className='pharmacy_medicine_container_3_1_up_box'>
                        <div className='pharmacy_medicine_container_3_1_up_box_left'>#123456</div>
                        <div className='pharmacy_medicine_container_3_1_up_box_right'>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='pharmacy_medicine_container_3_1_up_box2'>
                        <div className='pharmacy_medicine_container_3_1_up_box2_left'>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_1'><div className='phar_med_1'>Vaccine 1</div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_2'> <div className='phar_med_2'>Vaccine 2 </div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_3'><div className='phar_med_3'>Vaccine 3</div></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_up_box2_right'>Quotation: 560</div>
                    </div>
                </div>
                <div className='pharmacy_medicine_container_3_1_down'>
                    <div className='pharmacy_medicine_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='pharmacy_medicine_container_3_1_down_right'>
                        <div className='pharmacy_medicine_container_3_1_down_right_up'>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_btn'><button className='pharma_btn_med'>Accepted</button></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_down_right_down'>
                        XYZ, street name, City
                        </div>

                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/pharmabookingdone"} className='pahrma_booking_done_link'>
            <div className='pharmacy_medicine_container_3_2'>
                <div className='pharmacy_medicine_container_3_1_up'>
                    <div className='pharmacy_medicine_container_3_1_up_box'>
                        <div className='pharmacy_medicine_container_3_1_up_box_left'>#123456</div>
                        <div className='pharmacy_medicine_container_3_1_up_box_right'>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='pharmacy_medicine_container_3_1_up_box2'>
                        <div className='pharmacy_medicine_container_3_1_up_box2_left'>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_1'><div className='phar_med_1'>Vaccine 1</div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_2'> <div className='phar_med_2'>Vaccine 2 </div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_3'><div className='phar_med_3'>Vaccine 3</div></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_up_box2_right'>Quotation: 560</div>
                    </div>
                </div>
                <div className='pharmacy_medicine_container_3_1_down'>
                    <div className='pharmacy_medicine_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='pharmacy_medicine_container_3_1_down_right'>
                        <div className='pharmacy_medicine_container_3_1_down_right_up'>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_btn'><button className='pharma_btn_med'>Accepted</button></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_down_right_down'>
                        XYZ, street name, City
                        </div>

                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/pharmabookingdone"} className='pahrma_booking_done_link'>
            <div className='pharmacy_medicine_container_3_3'>
                <div className='pharmacy_medicine_container_3_1_up'>
                    <div className='pharmacy_medicine_container_3_1_up_box'>
                        <div className='pharmacy_medicine_container_3_1_up_box_left'>#123456</div>
                        <div className='pharmacy_medicine_container_3_1_up_box_right'>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='pharmacy_medicine_container_3_1_up_box2'>
                        <div className='pharmacy_medicine_container_3_1_up_box2_left'>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_1'><div className='phar_med_1'>Vaccine 1</div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_2'> <div className='phar_med_2'>Vaccine 2 </div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_3'><div className='phar_med_3'>Vaccine 3</div></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_up_box2_right'>Quotation: 560</div>
                    </div>
                </div>
                <div className='pharmacy_medicine_container_3_1_down'>
                    <div className='pharmacy_medicine_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='pharmacy_medicine_container_3_1_down_right'>
                        <div className='pharmacy_medicine_container_3_1_down_right_up'>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_btn'><button className='pharma_btn_med'>Accepted</button></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_down_right_down'>
                        XYZ, street name, City
                        </div>

                    </div>
                </div>

            </div>
            </Link>
            <Link to={"/pharmabookingdone"} className='pahrma_booking_done_link'>
            <div className='pharmacy_medicine_container_3_4'>
                <div className='pharmacy_medicine_container_3_1_up'>
                    <div className='pharmacy_medicine_container_3_1_up_box'>
                        <div className='pharmacy_medicine_container_3_1_up_box_left'>#123456</div>
                        <div className='pharmacy_medicine_container_3_1_up_box_right'>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='pharmacy_medicine_container_3_1_up_box_right_2'>09:00AM</div>
                        </div>
                    </div>
                    <div className='pharmacy_medicine_container_3_1_up_box2'>
                        <div className='pharmacy_medicine_container_3_1_up_box2_left'>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_1'><div className='phar_med_1'>Vaccine 1</div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_2'> <div className='phar_med_2'>Vaccine 2 </div></div>
                            <div className='pharmacy_medicine_container_3_1_up_box2_left_3'><div className='phar_med_3'>Vaccine 3</div></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_up_box2_right'>Quotation: 560</div>
                    </div>
                </div>
                <div className='pharmacy_medicine_container_3_1_down'>
                    <div className='pharmacy_medicine_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='pharmacy_medicine_container_3_1_down_right'>
                        <div className='pharmacy_medicine_container_3_1_down_right_up'>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pharmacy_medicine_container_3_1_down_right_up_btn'><button className='pharma_btn_med'>Accepted</button></div>
                        </div>
                        <div className='pharmacy_medicine_container_3_1_down_right_down'>
                        XYZ, street name, City
                        </div>

                    </div>
                </div>

            </div>
            </Link>

        </div>

        <div className='pharmacy_med_pagination'>
                    <a href='' className='anchi'><PiCaretDoubleLeftBold className='pharma_med_less_1'/></a>
                    <a href='' className='anchi'><PiCaretLeftBold className='pharma_med_less_doctor'/></a>
                    <a href=''className='anch_active'>1</a>
                    <a href='' className='anchi'>2</a>
                    <a href='' className='anchi'>3</a>
                    <a href='' className='anchi'>...</a>
                    <a href='' className='anchi'>10</a>
                    <a href='' className='anchi'><PiCaretRightBold className='pharma_med_less_doctor'/></a>
                    <a href='' className='anchi'><PiCaretDoubleRightBold className='pharma_med_less_doctor'/></a>

                </div>

    </div>
    <div className='footer_pharmacy_med'><Footer/></div>
    </>
  )
}

export default Pharmamedicine
