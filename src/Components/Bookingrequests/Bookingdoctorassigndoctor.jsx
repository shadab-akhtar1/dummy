import React,{useState} from 'react';
import './Bookingdoctorassigndoctor.css';
import {FaCaretDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import doctorimage from '../Assets/image-slEubuAxR-transformed.png';
import doctorsimage from '../Assets/image-Ow_nE8fdA-transformed.png';
import doctoresimage from '../Assets/image-RMOC43HSxZ-transformed.png';
import {Footer} from '../Dhamanagement/Footer';
import Navbars from '../Dhamanagement/Navbars';
import { IoCheckmark } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Doctordetail from './Doctordetail';

export const Bookingdoctorassigndoctor = () => {

        const [items,setItems] = useState(Doctordetail);
        const [showmid, setShowmid] = useState(false)
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
            {
                items.map((elem) =>{
                    const {id,name,description,image} = elem;
                    return(
                        <div className={showmid === id ? "dhaassign_container_2_2_top" : "null"}>
                        <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first'onClick={() =>setShowmid(id)}>
                
                        <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_up'><img src={image} alt="" /></div>
                
                        <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_main'>
                            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1_left'>
                            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_1'>{name}</div>
                            <div className='doctorassign_assigndoctor_dhaassign_container_2_2_first_down_2'>{description}</div>
                            </div>
                            {showmid ===id  ? (<div className='assigndoctor_dhaassign_container_2_2_first_down_1_right'tabIndex={1}><IoCheckmark/></div>):null}
                        </div>
                        

                        </div>
                        </div>
                    )
                })
            }

        </div>

    </div>
    <div className='doctorassign_assigndoctor_dhaassign_bookingrequest_footer_pharmacy'><Footer/></div>
    </>
  )
}
export default Bookingdoctorassigndoctor