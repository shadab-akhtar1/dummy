import React from 'react';
import './Doctordetailsbasic.css';
import {Navbar} from '../Dhamanagement/Navbar';
import userprofile from '../Assets/Avatar.svg';
import {Link} from 'react-router-dom';

export const Doctordetailsbasic = () => {
  return (
    <>
    <div className='management_doctor_basic'><Navbar/></div>
    <div className='middle_edit_basic'>
        <div className='middle_edit_heading_basic'>Edit Profile</div>
        <div className='middle_edit_heading2_basic_base'>
            <div className='middle_edit_heading2_basic_2'>Basic Details</div>
            <Link to={"/dhadocumentedit"}>
            <div className='middle_edit_heading2_document_basic'>Documents</div>
            </Link>
            <div className='middle_edit_heading2_info_basic'>Bank Info</div>
        </div>

        <div className='middle_userprofile_basic'>
            <div className='middle_userprofile_box_basic'>
                <div className='middle_userprofile_box_2_basic'>
                    <div className='middle_userprofile_box_2_userprofile_basic'>
                        <img src={userprofile} alt="userprofile" />
                        <div className='userprofile_box_basic'>
                            <ul>
                                <li><button className='upload_btn_basic'>Upload New Photo</button></li>
                                <li><button className='reset_btn_basic'>Reset</button></li>
                            </ul>
                            <ul>
                                <li className='listed_line_basic'>Allowed JPG, GIF or PNG. Max size of 800K</li>
                            </ul>
                        </div>
                    </div>
                    <form action="" className='userprofile_form_basic'>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Full Name</label><br />
                            <input type="text" className='form_data_basic'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic' >Mobile No.</label><br />
                            <input type="text" className='form_data_basic'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Gender</label><br />
                            <input type="text" className='form_data_basic'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Qualification</label><br />
                            <input type="text" className='form_data_basic'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Pharmacy Address</label><br />
                            <input type="text" className='form_data_basic'/>
                            <input type="text" className='form_data_basic'/>
                            <input type="text" className='form_data_basic'/>
                            <input type="text" className='form_data_basic'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Speciality</label><br />
                            <input type="text" className='form_data_basic'/>
                        </div>
                    </form>
                    
                </div>
                <Link to={"/dhadocumentedit"}>
                <button className='save_btn_basic'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default Doctordetailsbasic
