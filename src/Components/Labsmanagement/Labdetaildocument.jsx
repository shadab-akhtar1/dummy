import React from 'react';
import './Labdetaildocument.css';
import {Navbar} from '../Dhamanagement/Navbar';
import { FaRegPenToSquare } from "react-icons/fa6";
import{Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';

export const Labdetaildocument = () => {
  return (
    <>
    <div className='labdocument_pharma_navbar_document'><Navbar/></div>
    <div className='labdocument_pharma_document'>
        <div className='labdocument_pharma_document_heading'><h2><Link to={"/labdetailedit"} className='labdocument_pharma_document_link_head'><PiArrowLeftFill className='pharma_arrow_document'/></Link>Edit Profile</h2></div>
        <div className='labdocument_pharma_document_heading2'>
            <Link to={"/labdetailedit"} className='labdocument_pharma_basicdetails_link'>
            <div className='labdocument_pharma_document_heading2_basic'>Basic Details</div>
            </Link>
            <div className='labdocument_pharma_document_heading2_document'>Documents</div>
            <Link to={"/labdetailbank"} className='labdocument_pharma_basicdetails_link'>
            <div className='labdocument_pharma_document_heading2_info'>Bank Info</div>
            </Link>
        </div>

        <div className='labdocument_pharma_document_userprofile'>
            <div className='labdocument_pharma_document_userprofile_box'>
                <div className='labdocument_pharma_document_userprofile_box_2'>
                    
                    <form action="" className='labdocument_pharma_userprofile_form'>

                    <div className='labdocument_pharma_document_userprofile_form_input'>
                            <label className='labdocument_pharma_document_form_label'>Aadhar Card</label> <br /><br />
                            <input type="file" id='labdocument_pharma_document_form' className='labdocument_pharma_document_form_1' placeholder='aadhar.jpg'/>
                            <label for="labdocument_pharma_document_form" className='labdocument_pharma_document_form_2'>
                            <i className='labdocument_pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>

                        <div className='labdocument_pharma_document_userprofile_form_input'>
                            <label className='labdocument_pharma_document_form_label'>Pan Card</label> <br /><br />
                            <input type="file" id='labdocument_pharma_document_form' className='labdocument_pharma_document_form_1'/>
                            <label for="labdocument_pharma_document_form" className='labdocument_pharma_document_form_2'>
                            <i className='labdocument_pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                        
                        <div className='labdocument_pharma_document_userprofile_form_input'>
                            <label className='labdocument_pharma_document_form_label'>License File</label> <br /><br />
                            <input type="file" id='labdocument_pharma_document_form' className='labdocument_pharma_document_form_1'/>
                            <label for="labdocument_pharma_document_form" className='labdocument_pharma_document_form_2'>
                            <i className='labdocument_pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        <div className='labdocument_pharma_document_userprofile_form_input'>
                            <label className='labdocument_pharma_document_form_label'>GST File</label> <br /><br />
                            <input type="file" id='labdocument_pharma_document_form' className='labdocument_pharma_document_form_1'/>
                            <label for="labdocument_pharma_document_form" className='labdocument_pharma_document_form_2'>
                            <i className='labdocument_pharma_attach_file'><FaRegPenToSquare/></i>
                            </label>
                        </div>
                        
                        
                    </form>
                    
                </div>
                <Link to={"/labdetailbank"}>
                <button className='labdocument_pharma_document_save_btn'>Save Details</button>
                </Link>
                
            </div>
            
        </div>

    </div>
    </>
  )
}
export default Labdetaildocument
