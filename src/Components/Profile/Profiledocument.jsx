import React from 'react';
import './Profiledocument.css';
import { FaRegPenToSquare } from "react-icons/fa6";
import{Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {Navbar} from '../Dhamanagement/Navbar';

export const Profiledocument = () => {
  return (
    <>
    <div className='profiledocument_labdocument_pharma_navbar_document'><Navbar/></div>
    <div className='profiledocument_labdocument_pharma_document'>
        <div className='profiledocument_labdocument_pharma_document_heading'><h2><Link to={"profilebasic"} className='profiledocument_labdocument_pharma_document_link_head'><PiArrowLeftFill className='profiledocument_pharma_arrow_document'/></Link>Edit Profile</h2></div>
        <div className='profiledocument_labdocument_pharma_document_heading2'>
            <Link to={"/profilebasic"} className='profiledocument_labdocument_pharma_basicdetails_link'>
            <div className='profiledocument_labdocument_pharma_document_heading2_basic'>Basic Details</div>
            </Link>
            <div className='profiledocument_labdocument_pharma_document_heading2_document'>Documents</div>
            <Link to={"/profilebank"} className='profiledocument_labdocument_pharma_basicdetails_link'>
            <div className='profiledocument_labdocument_pharma_document_heading2_info'>Bank Info</div>
            </Link>
        </div>

        <div className='profiledocument_labdocument_pharma_document_userprofile'>
            <div className='profiledocument_labdocument_pharma_document_userprofile_box'>
                <div className='profiledocument_labdocument_pharma_document_userprofile_box_2'>
                    
                    <form action="" className='profiledocument_labdocument_pharma_userprofile_form'>

                    <div className='profiledocument_labdocument_pharma_document_userprofile_form_input'>
                            <label className='profiledocument_labdocument_pharma_document_form_label'>GST Certificate</label> <br /><br />
                            <input type="file" id='profiledocument_labdocument_pharma_document_form' className='profiledocument_labdocument_pharma_document_form_1' placeholder='aadhar.jpg'/>
                            <label for="profiledocument_labdocument_pharma_document_form" className='profiledocument_labdocument_pharma_document_form_2'placeholder='aadhar.jpg'>
                            <i className='profiledocument_labdocument_pharma_attach_file'placeholder='aadhar.jpg'><FaRegPenToSquare/></i>
                            </label>
                        </div>

                        <div className='profiledocument_labdocument_pharma_document_userprofile_form_input'>
                            <label className='profiledocument_labdocument_pharma_document_form_label'>Establishment Certificate</label> <br /><br />
                            <input type="file" id='profiledocument_labdocument_pharma_document_form' className='profiledocument_labdocument_pharma_document_form_1'/>
                            <label for="profiledocument_labdocument_pharma_document_form" className='profiledocument_labdocument_pharma_document_form_2'>
                            <i className='profiledocument_labdocument_pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                        
                        <div className='profiledocument_labdocument_pharma_document_userprofile_form_input'>
                            <label className='profiledocument_labdocument_pharma_document_form_label'>Upload BABL/NMC File </label> <br /><br />
                            <input type="file" id='profiledocument_labdocument_pharma_document_form' className='profiledocument_labdocument_pharma_document_form_1'/>
                            <label for="profiledocument_labdocument_pharma_document_form" className='profiledocument_labdocument_pharma_document_form_2'>
                            <i className='profiledocument_labdocument_pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                        
                    </form>
                    
                </div>
                <Link to={""}>
                <button className='profiledocument_labdocument_pharma_document_save_btn'>Save Details</button>
                </Link>
                
            </div>
            
        </div>

    </div>
    </>
  )
}
export default Profiledocument