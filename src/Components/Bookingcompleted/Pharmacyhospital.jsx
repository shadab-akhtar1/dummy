import React,{useState} from 'react';
import './Pharmacyhospital.css';
import Navbars from '../Dhamanagement/Navbars';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import pharimg from '../Assets/Ellipse 2 (1).jpg';
import {PiCaretDoubleLeftBold} from 'react-icons/pi';
import {PiCaretDoubleRightBold} from 'react-icons/pi';
import { PiCaretRightBold } from "react-icons/pi";
import { PiCaretLeftBold } from "react-icons/pi";
import {Footer} from '../Dhamanagement/Footer';
import { PiCalendarBlankLight } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";



export const Pharmacyhospital = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }

    const [isActive, setIsActive]= useState(false);
    const [hisActive, setHisActive]= useState(false);
  return (
    <>
    <div><Navbars/></div>
    <div className='bookingrequest_pharmacy_management_container'>
        <div className='bookingrequest_pharmacy_management_container_1'>
            <div className='bookingrequest_pharmacy_management_heading_box_1'><h2>Dashboard</h2></div>
            <div className='bookingrequest_pharmacy_management_heading_box_3'>
                <div className='bookingrequest_pharmacy_management_heading_box_2'><p>Availability</p>
            
                </div>
                <div className='toggle_booking_div'>
                    <div  className='toggle_booking'>
                    {toggleButton?<div onClick={handleClick} className='toggle_booking_left'></div>:
                    <div onClick={handleClick}className='toggle_booking_right'></div>}
                    </div>
                </div>
            </div>
        </div>
        <div className='bookingrequest_pharmacy_management_container_2_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_1_pendingpharma'>
            <Link to={"/dhahospital"} className='bookingrequest_medicine_link_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_p_1_pendingpharma'>DHA</div>
            </Link>
            <Link to={"/doctorhospital"} className='bookingrequest_medicine_link_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_p_2_pendingpharma'>Doctor</div>
            </Link>
            <div className='bookingrequest_pharmacy_management_container_2_p_3_pendingpharma'>Pharmacy</div>
            <Link to={"/labhospital"} className='bookingrequest_medicine_link_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_p_4_pendingpharma'>Lab</div>
            </Link>
            </div>
            <div className='bookingrequest_pharmacy_management_container_2_2_pendingpharma'onClick={(e)=> setHisActive(!hisActive)}>
                Sort by <FaCaretDown className='bookingrequest_pharmacy_management_icon_pendingpharma'/>
            </div>
            {hisActive &&(
              <div className='bookingrequest_dropdown_content_drop'>
                <Link to={""}>
                <div className='bookingrequest_dropdown_item_drop'>Sort by</div>
                </Link>
                

              </div>
              )}
        </div>
        <div className='bookingrequest_pharmacy_management_container_4'>
            <div className='bookingrequest_pharmacy_management_container_4_urgent_pendingdha'onClick={(e)=> setIsActive(!isActive)} >Vaccine <FaCaretDown className='bookingrequest_pharmacy_management_container_4_icon'/>

            </div>
            {isActive &&(
              <div className='dropdown_content_drop'>
                <Link to={""}>
                <div className='dropdown_item_drop'>Vaccine</div>
                </Link>
                
              </div>
              )}

        </div>
        
        <div className='bookingrequest_pharmacy_management_container_3'>
            <Link to={"/completedaddquotation"} className='pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='pharmacyhospital_calen'/>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='pharmacyhospital_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Delivered</button></div>
                        </div>
                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        
                        
                    

                    </div>
                </div>
                <div className='pendingpharmacy_card_last_div'>
                    <div className='pendingpharmacy_card_last_div_1'>
                        <div className='pendingpharmacy_card_last_div_1_left'>Quotation:</div>
                        <div className='pendingpharmacy_card_last_div_1_right'>RS 500</div>
                    </div>

                </div>
                

            </div>
            </Link>
            <Link to={"/completedaddquotation"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_2'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='pharmacyhospital_calen'/>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='pharmacyhospital_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Delivered</button></div>
                        </div>

                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        
                        
                        

                    </div>
                </div>
                <div className='pendingpharmacy_card_last_div'>
                    <div className='pendingpharmacy_card_last_div_1'>
                        <div className='pendingpharmacy_card_last_div_1_left'>Quotation:</div>
                        <div className='pendingpharmacy_card_last_div_1_right'>RS 500</div>
                    </div>

                </div>
                
                

            </div>
            </Link>
            <Link to={"/completedaddquotation"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_3'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='pharmacyhospital_calen'/>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='pharmacyhospital_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Delivered</button></div>
                        </div>
                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        
                        

                    </div>
                </div>
                <div className='pendingpharmacy_card_last_div'>
                    <div className='pendingpharmacy_card_last_div_1'>
                        <div className='pendingpharmacy_card_last_div_1_left'>Quotation:</div>
                        <div className='pendingpharmacy_card_last_div_1_right'>RS 500</div>
                    </div>

                </div>
                

            </div>
            </Link>
            <Link to={"/completedaddquotation"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_4'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'><PiCalendarBlankLight className='pharmacyhospital_calen'/>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'><CiClock2 className='pharmacyhospital_clock'/>09:00AM</div>
                        </div>
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box2'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_1'><div className='bookingrequest_phar_vaac_1'>Vaccine 1</div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_2'> <div className='bookingrequest_phar_vaac_2'>Vaccine 2 </div></div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box2_left_3'><div className='bookingrequest_phar_vaac_3'>Vaccine 3</div></div>
                        </div>
                        
                    </div>
                </div>
                <div className='bookingrequest_pharmacy_management_container_3_1_down'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_left'>
                        <img src={pharimg} alt="" />
                    </div>
                    <div className='bookingrequest_pharmacy_management_container_3_1_down_right'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_down_right_up_text'>Patient Name</div>
                            <div className='pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Delivered</button></div>
                            
                        </div>
                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Age : 32 | Gender: Male | Blood Group: O+
                        </div>
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        Height : 6” 3 inches | Weight : 76
                        </div>
                        
                        
                        

                    </div>
                </div>
                <div className='pendingpharmacy_card_last_div'>
                    <div className='pendingpharmacy_card_last_div_1'>
                        <div className='pendingpharmacy_card_last_div_1_left'>Quotation:</div>
                        <div className='pendingpharmacy_card_last_div_1_right'>RS 500</div>
                    </div>

                </div>
                

            </div>
            </Link>

        </div>


        <div className='bookingrequest_pharmacy_pagination'>
                    <a href='' className='bookingrequest_anchi'><PiCaretDoubleLeftBold className='bookingrequest_pharma_less_1'/></a>
                    <a href='' className='bookingrequest_anchi'><PiCaretLeftBold className='bookingrequest_pharma_less_doctor'/></a>
                    <a href=''className='bookingrequest_anch_active'>1</a>
                    <a href='' className='bookingrequest_anchi'>2</a>
                    <a href='' className='bookingrequest_anchi'>3</a>
                    <a href='' className='bookingrequest_anchi'>...</a>
                    <a href='' className='bookingrequest_anchi'>10</a>
                    <a href='' className='bookingrequest_anchi'><PiCaretRightBold className='bookingrequest_pharma_less_doctor'/></a>
                    <a href='' className='bookingrequest_anchi'><PiCaretDoubleRightBold className='bookingrequest_pharma_less_doctor'/></a>

                </div>

    </div>
    <div className='bookingrequest_footer_pharmacy'><Footer/></div>
    
    
    
    </>
  )
}
export default Pharmacyhospital