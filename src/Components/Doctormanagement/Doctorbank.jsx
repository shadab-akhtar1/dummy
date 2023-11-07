import React from 'react';
import './Doctorbank.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {GrAttachment} from 'react-icons/gr';

export const Doctorbank = () => {
  return (
    <>
    <div className='management_navbar_doctor_bankinfo'><Navbar/></div>
    <div className='middle_edit_doctor_bankinfo'>
        <div className='middle_edit_doctor_bankinfo_heading'>Edit Profile</div>
        <div className='middle_edit_doctor_bankinfo_heading2'>
            <div className='middle_edit_doctor_bankinfo_heading2_basic'>Basic Details</div>
            <Link to={"/dhadocumentedit"}>
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
                        <div className='userprofile_form_input'>
        
                            <label className='document_form_label'>Upload bank statement/cancel cheque</label> <br />
                            <input type="file" id='document_form' className='document_doctor_bankinfo_form_1'/>
                            <label for="document_form" className='document_doctor_bankinfo_form_2'>
                            <i className='doctor_bankinfo_attach_file'><GrAttachment/></i>
                            </label>
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
