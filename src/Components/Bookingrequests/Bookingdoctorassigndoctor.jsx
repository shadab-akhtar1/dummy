import React from 'react';
import './Bookingdoctorassigndoctor.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import {FaBell} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import profile from "../Assets/Rectangle 619 (1).jpg";
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import doctorimage from '../Assets/image-slEubuAxR-transformed.png';
import doctorsimage from '../Assets/image-Ow_nE8fdA-transformed.png';
import doctoresimage from '../Assets/image-RMOC43HSxZ-transformed.png';
import {Footer} from '../Dhamanagement/Footer';

export const Bookingdoctorassigndoctor = () => {
  return (
    <>
    <nav className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_navbar_doctorcase'>
        <div className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_navbar_logo_doctorcase'>
        <img src={Weblogo} alt="logo_doctorcase" />
        </div>

        <ul className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_nav_links_doctorcase'>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Dooper At Home</li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Lab Tesst </li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Our Network < FaCaretDown/></li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>About Us</li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Contact Us</li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_doctorcase'>Join Us With <FaCaretDown/></li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_1_dhacase'><img src={profile} alt="" className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_jaydoctor_profile'/>Jaydeep Sakhiya <FaCaretDown/></li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase'><FaBell className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_icons_bell_doctorcase'/></li>
            <li className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_list_item_1_doctorcase_2'>< BsTelephone className='doctorassign_assigndoctor_dhaassign_bookingrequests_pharmabooking_phone_icon_doctorcase'/></li>
        </ul>

    </nav>
    <div className='doctorassign_assigndoctor_dhaassign_container_2'>
        <div className='doctorassign_assigndoctor_dhaassign_container_2_1'>
        
            <div className='doctorassign_assigndoctor_dhaassign_profile_documnet_labdetailedit_pharma_edit_heading_basic'>
                <h2><Link to={"/profile"} className='doctorassign_assigndoctor_dhaassign_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='assigndoctor_dhaassign_profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>Choose Doctor</h2>
            </div>
            <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_1'>search</div>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2_up'>Speciality :</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2_down'>Physiotherapist <FaCaretDown className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2_down_icon'/></div>
                </div>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_3'><button>Assign</button></div>

            </div>
        </div>
        <div className='doctorassign_assigndoctor_dhaassign_container_2_2'>
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        

        
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_1'>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_right'>01</div>
                </div>

            </div>

        
        
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctoresimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Devon Lane</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        
        
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctoresimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Devon Lane</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_fifth'>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorsimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Floyd Miles</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_fifth'>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorsimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Floyd Miles</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                </div>

            </div>

        </div>

        


    </div>
    <div className='doctorassign_assigndoctor_dhaassign_bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdoctorassigndoctor