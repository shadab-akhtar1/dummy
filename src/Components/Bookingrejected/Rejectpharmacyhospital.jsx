import React,{useState} from 'react';
import './Rejectpharmacyhospital.css';
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

export const Rejectpharmacyhospital = () => {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }

    const [isActive, setIsActive]= useState(false);
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
                    <div  className='toggle_booking'></div>
                    {toggleButton?<div onClick={handleClick} className='toggle_booking_left'></div>:
                    <div onClick={handleClick}className='toggle_booking_right'></div>}
                
                </div>
            </div>
        </div>
        <div className='bookingrequest_pharmacy_management_container_2_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_1_pendingpharma'>
            <Link to={"/rejectdhahospital"} className='bookingrequest_medicine_link_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_p_1_pendingpharma'>DHA</div>
            </Link>
            <Link to={"/rejectdoctorhospital"} className='bookingrequest_medicine_link_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_p_2_pendingpharma'>Doctor</div>
            </Link>
            <div className='bookingrequest_pharmacy_management_container_2_p_3_pendingpharma'>Pharmacy</div>
            <Link to={"/rejectlabhospital"} className='bookingrequest_medicine_link_pendingpharma'>
            <div className='bookingrequest_pharmacy_management_container_2_p_4_pendingpharma'>Lab</div>
            </Link>
            </div>
            <div className='bookingrequest_pharmacy_management_container_2_2_pendingpharma'>
                Sort by <FaCaretDown className='bookingrequest_pharmacy_management_icon_pendingpharma'/>
            </div>
        </div>
        <div className='bookingrequest_pharmacy_management_container_4'>
            <div className='bookingrequest_pharmacy_management_container_4_urgent_pendingdha'onClick={(e)=> setIsActive(!isActive)} >Medicine <FaCaretDown className='bookingrequest_pharmacy_management_container_4_icon'/>

            </div>
            {isActive &&(
              <div className='rejectpharmacyhospital1_dropdown_content_drop'>
                <Link to={""}>
                <div className='rejectpharmacyhospital1_dropdown_item_drop'>Medicine</div>
                </Link>
                

              </div>
              )}

        </div>
        
        <div className='bookingrequest_pharmacy_management_container_3'>
            <Link to={"/rejectaddquotation"} className='pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_1'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
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
                            <div className='rejectpharmacyhospital1_pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Rejected</button></div>
                        </div>
                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        XYZ,Street Name,City
                        </div>
                        
                        
                        
                    

                    </div>
                </div>
                
                

            </div>
            </Link>
            <Link to={"/rejectaddquotation"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_2'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
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
                            <div className='rejectpharmacyhospital1_pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Rejected</button></div>
                        </div>

                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        XYZ,Street Name,City
                        </div>
                        
                        
                        
                        

                    </div>
                </div>
                
                
                

            </div>
            </Link>
            <Link to={"/rejectaddquotation"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_3'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
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
                            <div className='rejectpharmacyhospital1_pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Rejected</button></div>
                        </div>
                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        XYZ,Street Name,City
                        </div>
                        
                        
                        

                    </div>
                </div>
                
                

            </div>
            </Link>
            <Link to={"/rejectaddquotation"} className='bookingrequest_pahrma_boking_link'>
            <div className='bookingrequest_pharmacy_management_container_3_4'>
                <div className='bookingrequest_pharmacy_management_container_3_1_up'>
                    <div className='bookingrequest_pharmacy_management_container_3_1_up_box'>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_left'>#123456</div>
                        <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right'>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_1'>13 June, 2023</div>
                            <div className='bookingrequest_pharmacy_management_container_3_1_up_box_right_2'>09:00AM</div>
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
                            <div className='rejectpharmacyhospital1_pendingpharmacy_pendingdha_card_2_up_pharmacy_hospital'><button>Rejected</button></div>
                            
                        </div>
                        
                        <div className='pendingpharmacy_pendingdoctor_bookingrequest_lab_card_2_left'>
                        XYZ,Street Name,City
                        </div>
                        
                        
                        
                        

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
export default Rejectpharmacyhospital