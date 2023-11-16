import React from 'react';
import './Dhadocumentedit.css';
import {Navbar} from './Navbar';
import { FaRegPenToSquare } from "react-icons/fa6";
import{Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';

export const Dhadocumentedit = () => {
  return (
    <div>
    <div className='management_navbar_document'><Navbar/></div>
    <div className='middle_document'>
        <div className='middle_document_heading'><h2><Link to={"/dhadetailsedit"} className='document_link_head'><PiArrowLeftFill className='arrow_document'/></Link>Edit Pofile</h2></div>
        <div className='middle_document_heading2'>
            <Link to={"/dhadetailsedit"} className='basicdetails_link'>
            <div className='middle_document_heading2_basic'>Basic Details</div>
            </Link>
            <div className='middle_document_heading2_document'>Documents</div>
            <Link to={"/dhabankinfoedit"} className='basicdetails_link'>
            <div className='middle_document_heading2_info'>Bank Info</div>
            </Link>
        </div>

        <div className='middle_document_userprofile'>
            <div className='middle_document_userprofile_box'>
                <div className='middle_document_userprofile_box_2'>
                    
                    <form action="" className='document_userprofile_form'>

                    <div className='document_userprofile_form_input'>
                            <label className='document_form_label'>Aadhar Card</label> <br /><br />
                            <input type="file" id='document_form' className='document_form_1'placeholder='aadhar.jpg'/>
                            <label for="document_form" className='document_form_2'>
                            <i className='attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>

                        <div className='document_userprofile_form_input'>
                            <label className='document_form_label'>Pan Card</label> <br /><br />
                            <input type="file" id='document_form' className='document_form_1'/>
                            <label for="document_form" className='document_form_2'>
                            <i className='attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                        
                        <div className='document_userprofile_form_input'>
                            <label className='document_form_label'>Medical Counsel Certificate</label> <br /><br />
                            <input type="file" id='document_form' className='document_form_1'/>
                            <label for="document_form" className='document_form_2'>
                            <i className='attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                    </form>
                    
                </div>
                <Link to={"/dhabankinfoedit"}>
                <button className='document_save_btn'>Save Details</button>
                </Link>
                
            </div>
            
        </div>

    </div>
    </div>
    
  )
}
export default Dhadocumentedit
