import React from 'react';
import './Pharmadocument.css';
import {Navbar} from '../Dhamanagement/Navbar';
import { FaRegPenToSquare } from "react-icons/fa6";
import{Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';

export const Pharmadocument = () => {
  return (
    <>
    <div className='mpharma_navbar_document'><Navbar/></div>
    <div className='pharma_document'>
        <div className='pharma_document_heading'><h2><Link to={"/pharmabasicedit"} className='pharma_document_link_head'><PiArrowLeftFill className='pharma_arrow_document'/></Link>Edit Profile</h2></div>
        <div className='pharma_document_heading2'>
            <Link to={"/pharmabasicedit"} className='pharma_basicdetails_link'>
            <div className='pharma_document_heading2_basic'>Basic Details</div>
            </Link>
            <div className='pharma_document_heading2_document'>Documents</div>
            <Link to={"/pharmabankinfo"} className='pharma_basicdetails_link'>
            <div className='pharma_document_heading2_info'>Bank Info</div>
            </Link>
        </div>

        <div className='pharma_document_userprofile'>
            <div className='pharma_document_userprofile_box'>
                <div className='pharma_document_userprofile_box_2'>
                    
                    <form action="" className='pharma_userprofile_form'>

                    <div className='pharma_document_userprofile_form_input'>
                            <label className='pharma_document_form_label'>Aadhar Card</label> <br /><br />
                            <input type="file" id='pharma_document_form' className='pharma_document_form_1' placeholder='aadhar.jpg'/>
                            <label for="pharma_document_form" className='pharma_document_form_2'>
                            <i className='pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>

                        <div className='pharma_document_userprofile_form_input'>
                            <label className='pharma_document_form_label'>Pan Card</label> <br /><br />
                            <input type="file" id='pharma_document_form' className='pharma_document_form_1'/>
                            <label for="pharma_document_form" className='pharma_document_form_2'>
                            <i className='pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                        
                        <div className='pharma_document_userprofile_form_input'>
                            <label className='pharma_document_form_label'>License File</label> <br /><br />
                            <input type="file" id='pharma_document_form' className='pharma_document_form_1'/>
                            <label for="pharma_document_form" className='pharma_document_form_2'>
                            <i className='pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        <div className='pharma_document_userprofile_form_input'>
                            <label className='pharma_document_form_label'>GST File</label> <br /><br />
                            <input type="file" id='pharma_document_form' className='pharma_document_form_1'/>
                            <label for="pharma_document_form" className='pharma_document_form_2'>
                            <i className='pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                    </form>
                    
                </div>
                <Link to={"/pharmabankinfo"}>
                <button className='pharma_document_save_btn'>Save Details</button>
                </Link>
                
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Pharmadocument
