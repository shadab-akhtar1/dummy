import React, { useState } from 'react';
import './Bookingdhaassign.css';
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
import { IoIosSearch } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

export const Bookingdhaassign = () => {
    const [show, setShow] = useState(false)
    const [showmid, setShowmid] = useState(false)
    const [showcase, setShowcase] = useState(false)
    const [showmidcase, setShowmidcase] = useState(false)
    const [showid, setShowid] = useState(false)
    const [showidmid, setShowidmid] = useState(false)
    
  return (
    <>
     <div><Navbars/></div>
    <div className='dhaassign_container_2'>
        <div className='dhaassign_container_2_1'>
        
            <div className='dhaassign_profile_documnet_labdetailedit_pharma_edit_heading_basic'>
                <h2><Link to={"/bookingdhacase"} className='dhaassign_profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='dhaassign_profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>Choose DHA</h2>
            </div>
            <div className='dhaassign_container_2_1_second'>
                <div className='dhaassign_container_2_1_second_1'><input type="search" placeholder='search'/><i><IoIosSearch className='bookingdhaassign_doctor_search'/></i></div>
                <div className='dhaassign_container_2_1_second_2'>
                    <div className='dhaassign_container_2_1_second_2_up'>Speciality :</div>
                    <div className='dhaassign_container_2_1_second_2_down'>Physiotherapist <FaCaretDown className='dhaassign_container_2_1_second_2_down_icon'/></div>
                </div>
                <Link to={"/bookingdhadhaassign"} className='bookingdhaassign_link'>
                <div className='dhaassign_container_2_1_second_3'><button>Assign</button></div>
                </Link>

            </div>
        </div>
        <div className='dhaassign_container_2_2'>
            <div className={showmid === true ? "dhaassign_container_2_2_top" : ""}>
            <div className='dhaassign_container_2_2_first' onClick={() =>setShowmid(!showmid)}>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                </div>
                {showmid && <div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>}

            </div>
            </div>

            <div className={show === true ? "dhaassign_container_2_2_top" : ""}>
            <div className= "dhaassign_container_2_2_first" onClick={() =>setShow(!show)}>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorimage} alt="" /></div>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1'>Courtney Henry</div>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    {show && <div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>}
                </div>

            </div>
            </div>

            <div className={showcase === true ? "dhaassign_container_2_2_top" : ""}>
            <div className='dhaassign_container_2_2_first'  onClick={() =>setShowcase(!showcase)}>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_up'><img src={doctoresimage} alt="" /></div>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1'>Devon Lane</div>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    {showcase && <div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>}
                </div>

            </div>
            </div>
            

        
            <div className={showmidcase === true ? "dhaassign_container_2_2_top" : ""}>
            <div className='dhaassign_container_2_2_first' onClick={() =>setShowmidcase(!showmidcase)}>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_up'><img src={doctoresimage} alt="" /></div>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1'>Devon Lane</div>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    {showmidcase && <div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>}
                </div>

            </div>
            </div>

            <div className={showid === true ? "dhaassign_container_2_2_top" : ""}>
            <div className='dhaassign_container_2_2_first' onClick={() =>setShowid(!showid)}>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_up'><img src={doctorsimage} alt="" /></div>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1'>Floyd Miles</div>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    {showid && <div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>}
                </div>

            </div>
            </div>

            <div className={showidmid === true ? "dhaassign_container_2_2_top" : ""}>
            <div className='dhaassign_container_2_2_first' onClick={() =>setShowidmid(!showidmid)}>
                
                <div className='dhaassign_container_2_2_first_up'><img src={doctorsimage} alt="" /></div>
                
                <div className='assigndoctor_dhaassign_container_2_2_first_down_main'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_1'>Floyd Miles</div>
                    <div className='assigndoctor_dhaassign_container_2_2_first_down_2'>Physiotherapist</div>
                    </div>
                    {showidmid && <div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>}
                </div>

            </div>
            </div>

        </div>

        


    </div>
    <div className='dhaassign_bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdhaassign
