import React from 'react';
import './Doctordocument.css';
import{Link} from 'react-router-dom';
import {GrAttachment} from 'react-icons/gr';
import {Navbar} from '../Dhamanagement/Navbar';
import {PiArrowLeftFill} from 'react-icons/pi';

export const Doctordocument = () => {
  return (
    <>
    <div className='management_navbar_Doctor_document'><Navbar/></div>
    <div className='middle_doctor_document'>
        <div className='middle_doctor_document_heading'><h2><Link to={"/doctordetailsbasic"} className='document_link_head_doctor'><PiArrowLeftFill className='arrow_document_doctor'/></Link>Edit Pofile</h2></div>
        <div className='middle_doctor_document_heading2'>
            <Link to={"/doctordetailsbasic"} className='doctor_basicdetails_link'>
            <div className='middle_doctor_document_heading2_basic'>Basic Details</div>
            </Link>
            <div className='middle_doctor_document_heading2_document'>Documents</div>
            <Link to={"/doctorbank"} className='doctor_basicdetails_link'>
            <div className='middle_doctor_document_heading2_info'>Bank Info</div>
            </Link>
        </div>

        <div className='middle_doctor_document_userprofile'>
            <div className='middle_doctor_document_userprofile_box'>
                <div className='middle_doctor_document_userprofile_box_2'>
                    
                    <form action="" className='doctor_document_userprofile_form'>

                    <div className='document_userprofile_form_input'>
                            <label className='doctor_document_form_label'>Aadhar Card</label> <br /><br />
                            <input type="file" id='document_form' className='doctor_document_form_1'/>
                            <label for="document_form" className='doctor_document_form_2'>
                            <i className='doctor_attach_file'><GrAttachment/></i>
                            
                            </label>
                        </div>

                        <div className='document_userprofile_form_input'>
                            <label className='doctor_document_form_label'>Pan Card</label> <br /><br />
                            <input type="file" id='document_form' className='doctor_document_form_1'/>
                            <label for="document_form" className='doctor_document_form_2'>
                            <i className='doctor_attach_file'><GrAttachment/></i>
                            </label>
                        </div>
                        
                        
                        
                        <div className='document_userprofile_form_input'>
                            <label className='doctor_document_form_label'>Lab RMC Medical Counsel Certificate</label> <br /><br />
                            <input type="file" id='document_form' className='doctor_document_form_1'/>
                            <label for="document_form" className='doctor_document_form_2'>
                            <i className='doctor_attach_file'><GrAttachment/></i>
                            </label>
                        </div>
                        
                        
                    </form>
                    
                </div>
                <Link to={"/dhabankinfoedit"}>
                <button className='doctor_document_save_btn'>Save Details</button>
                </Link>
                
            </div>
            
        </div>

    </div>
    
    </>
  )
}

export default Doctordocument