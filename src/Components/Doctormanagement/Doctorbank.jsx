import React from 'react';
import './Doctorbank.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {GrAttachment} from 'react-icons/gr';
import {PiArrowLeftFill} from 'react-icons/pi';
import {RiUploadCloudLine} from "react-icons/ri";

export const Doctorbank = () => {
  return (
    <>
    <div className='management_navbar_doctor_bankinfo'><Navbar/></div>
    <div className='middle_edit_doctor_bankinfo'>
        <div className='middle_edit_doctor_bankinfo_heading'><h2><Link to={"/doctordocument"} className='bankinfo_link_head_doctor'><PiArrowLeftFill className='arrow_bankinfo_doctor'/></Link>Edit Profile</h2></div>
        <div className='middle_edit_doctor_bankinfo_heading2'>
            <div className='middle_edit_doctor_bankinfo_heading2_basic'>Basic Details</div>
            <Link to={"/doctordocument"} className='bankinfo_document_doctor'>
            <div className='middle_edit_doctor_bankinfo_heading2_document'>Documents</div>
            </Link>
            <div className='middle_edit_doctor_bankinfo_heading2_info'>Bank Info</div>
        </div>

        <div className='middle_doctor_bankinfo_userprofile'>
            <div className='middle_doctor_bankinfo_userprofile_box'>
                <div className='middle_doctor_bankinfo_userprofile_box_2'>
                    
                    <form action="" className='doctor_bankinfo_userprofile_form'>
                        <div className='doctor_userprofile_form_input'>
                            <label className='doctor_bankinfo_form_label'>Bank Name</label><br />
                            <input type="text" className='doctor_bankinfo_form_data'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='doctor_bankinfo_form_label' >Account Number</label><br />
                            <input type="text" className='doctor_bankinfo_form_data'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='doctor_bankinfo_form_label'>IFSC Code</label><br />
                            <input type="text" className='doctor_bankinfo_form_data'/>
                        </div>
                        
                        <div className='adddoctor_bank_form_fill'>
                    <div className='adddoctor_bank_form_fill_div'><label className='adddoctor_bank_form_fill_labi'>Lab RMC Medical Counsel Certificate</label></div><br />
                    <input type="file" id="adddoctor_bank_file"className='adddoctor_bank_form_fill_inp_3' />
                    <label for="adddoctor_bank_file" className='adddoctor_bank_file_up'><i className='adddoctor_bank_icon_i'><RiUploadCloudLine/></i>Upload File</label>
                </div>
                        
                    </form>
                    
                </div>
                <Link to={"/dhadocumentedit"}>
                <button className='doctor_bankinfo_save_btn'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Doctorbank
