import React from 'react';
import './Pharmabankinfo.css';
import {Navbar} from '../Dhamanagement/Navbar';
import userprofile from '../Assets/Avatar.svg';
import {Link} from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import {PiArrowLeftFill} from 'react-icons/pi';

export const Pharmabankinfo = () => {
  return (
    <>
    <div className='pharma_navbar_bankinfo'><Navbar/></div>
    <div className='pharma_edit_bankinfo'>
        <div className='pharma_edit_bankinfo_heading'><h2><Link to={"/pharmadocument"} className='pharma_bankinfo_link_head'><PiArrowLeftFill className='pharma_arrow_bankinfo'/></Link>Edit Profile</h2></div>
        <div className='pharma_edit_bankinfo_heading2'>
            <div className='pharma_edit_bankinfo_heading2_basic'>Basic Details</div>
            <Link to={"/pharmadocument"} className='pharma_bankinfo_document'>
            <div className='pharma_edit_bankinfo_heading2_document'>Documents</div>
            </Link>
            <div className='pharma_edit_bankinfo_heading2_info'>Bank Info</div>
        </div>

        <div className='pharma_bankinfo_userprofile'>
            <div className='pharma_bankinfo_userprofile_box'>
                <div className='pharma_bankinfo_userprofile_box_2'>
                    
                    <form action="" className='pharma_bankinfo_userprofile_form'>
                        <div className='pharma_userprofile_form_input'>
                            <label className='pharma_bankinfo_form_label'>Bank Name</label>
                            <input type="text" className='pharma_bankinfo_form_data' placeholder='Central Bank'/>
                        </div>
                        <div className='pharma_userprofile_form_input'>
                            <label className='pharma_bankinfo_form_label' >Account Number</label>
                            <input type="text" className='pharma_bankinfo_form_data' placeholder='1234567890'/>
                        </div>
                        <div className='pharma_userprofile_form_input'>
                            <label className='pharma_bankinfo_form_label'>IFSC Code</label>
                            <input type="text" className='pharma_bankinfo_form_data' placeholder='CBINO4545'/>
                        </div>
                        <div className='pharma_userprofile_form_input'>
        
                            <label className='pharma_document_form_label'>Upload bank statement/cancel cheque</label> 
                            <input type="file" id='pharma_document_form' className='pharma_bankinfo_form_1'/>
                            <label for="pharma_document_form" className='pharma_bankinfo_form_2'>
                            <i className='pharma_bankinfo_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                    </form>
                    
                </div>
                <Link to={""}>
                <button className='pharma_bankinfo_save_btn'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Pharmabankinfo
