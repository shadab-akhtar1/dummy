import React from 'react';
import './Bookingdhaassign.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import doctorimage from '../Assets/image-slEubuAxR-transformed.png';
import {Footer} from '../Dhamanagement/Footer';

export const Bookingdhaassign = () => {
  return (
    <>
     <nav className='dhaassign_bookingrequests_pharmabooking_navbar_doctorcase'>
        <div className='dhaassign_bookingrequests_pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='dhaassign_bookingrequests_pharmabooking_nav_links_doctorcase'>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='dhaassign_bookingrequests_pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase'><FaBell className='dhaassign_bookingrequests_pharmabooking_icons_bell_doctorcase'/></li>
            <li className='dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='dhaassign_bookingrequests_pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>
    <div className='dhaassign_container_2'>
        <div className='dhaassign_container_2_1'>
        
            <div className='dhaassign_profile_documnet_labdetailedit_pharma_edit_heading_basic'>
                <h2><Link to={"/profile"} className='dhaassign_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='dhaassign_profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>Choose DHA</h2>
            </div>
            <div className='dhaassign_container_2_1_second'>
                <div className='dhaassign_container_2_1_second_1'>search</div>
                <div className='dhaassign_container_2_1_second_2'>
                    <div className='dhaassign_container_2_1_second_2_up'>Speciality :</div>
                    <div className='dhaassign_container_2_1_second_2_down'>Physiotherapist <FaCaretDown className='dhaassign_container_2_1_second_2_down_icon'/></div>
                </div>
                <div className='dhaassign_container_2_1_second_3'><button>Assign</button></div>

            </div>
        </div>
        <div className='dhaassign_container_2_2'>
            <div className='dhaassign_container_2_2_first'>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='dhaassign_container_2_2_first_down'>
                    <div className='dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        

        
            <div className='dhaassign_container_2_2_first'>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='dhaassign_container_2_2_first_down'>
                    <div className='dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        
        
            <div className='dhaassign_container_2_2_first'>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='dhaassign_container_2_2_first_down'>
                    <div className='dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        
        
            <div className='dhaassign_container_2_2_first'>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='dhaassign_container_2_2_first_down'>
                    <div className='dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>
            <div className='dhaassign_container_2_2_fifth'>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='dhaassign_container_2_2_first_down'>
                    <div className='dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

            <div className='dhaassign_container_2_2_fifth'>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='dhaassign_container_2_2_first_down'>
                    <div className='dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        </div>

        


    </div>
    <div className='dhaassign_bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdhaassign
