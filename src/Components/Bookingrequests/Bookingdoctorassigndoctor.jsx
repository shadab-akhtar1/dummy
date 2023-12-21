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
import Navbars from '../Dhamanagement/Navbars';
import { IoCheckmark } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

export const Bookingdoctorassigndoctor = () => {
  return (
    <>
    <div><Navbars/></div>
    <div className='doctorassign_assigndoctor_dhaassign_container_2'>
        <div className='doctorassign_assigndoctor_dhaassign_container_2_1'>
        
            <div className='doctorassign_assigndoctor_dhaassign_profile_documnet_labdetailedit_pharma_edit_heading_basic'>
                <h2><Link to={"/bookingdoctorcase"} className='doctorassign_assigndoctor_dhaassign_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='assigndoctor_dhaassign_profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>Choose Doctor</h2>
            </div>
            <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_1'><input type="search" placeholder='search'/><i><IoIosSearch className='bookingdoctor_search'/></i></div>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2_up'>Speciality :</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2_down'>Physiotherapist <FaCaretDown className='doctorassign_assigndoctor_dhaassign_container_2_1_second_2_down_icon'/></div>
                </div>
                <Link to={"/bookingdoctordoctorassign"} className='bookingdoctorassigndoctor_link'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_1_second_3'><button>Assign</button></div>
                </Link>

            </div>
        </div>
        <div className='doctorassign_assigndoctor_dhaassign_container_2_2'>
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'tabIndex={1}>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                </div>

            </div>

        

        
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'tabIndex={1}>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    
                </div>

            </div>

        
        
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'tabIndex={1}>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctoresimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Devon Lane</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                </div>

            </div>

        
        
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'tabIndex={1}>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctoresimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Devon Lane</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                </div>

            </div>
            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'tabIndex={1}>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorsimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Floyd Miles</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                </div>

            </div>

            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'tabIndex={1}>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorsimage} alt="" /></div>
                
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>Floyd Miles</div>
                    <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                </div>

            </div>

        </div>

        


    </div>
    <div className='doctorassign_assigndoctor_dhaassign_bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdoctorassigndoctor