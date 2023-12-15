import React from 'react';
import './Doctordetailsbasic.css';
import {Navbar} from '../Dhamanagement/Navbar';
import userprofile from '../Assets/Avatar.svg';
import {Link} from 'react-router-dom';

import {PiArrowLeftFill} from 'react-icons/pi';

export const Doctordetailsbasic = () => {
  return (
    <>
    <div className='management_doctor_basic'><Navbar/></div>
    <div className='middle_edit_basic'>
        <div className='middle_edit_heading_basic'><h2><Link to={"/doctordetails"} className='link_detailsedit_head_basic'><PiArrowLeftFill className='arrow_edit_basic'/></Link>Edit Profile</h2></div>
        <div className='middle_edit_heading2_basic_base'>
            <div className='middle_edit_heading2_basic_2'>Basic Details</div>
            <Link to={"/doctordocument" } className='detailsedit_document_basic'>
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
                            <label className='form_label_basic'>Full Name</label>
                            <input type="text" className='form_data_basic' placeholder='Jaydip Sakhiya'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic' >Mobile No.</label>
                            <input type="text" className='form_data_basic' placeholder='+91 1234567890'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Gender </label>
                            
                            <input type="text"  className='form_data_basic' placeholder='Male'/>
                            
                        
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'> Address</label>
                            <input type="text" className='form_data_basic' placeholder='Lorem ipsum dolor sit amet'/>
                            <input type="text" className='form_data_basic' placeholder='consectetur adipiscing elit. Praesent.'/>
                            <input type="text" className='form_data_basic' placeholder='Jaipur'/>
                            <input type="text" className='form_data_basic' placeholder='Rajasthan'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Qualification</label>
                            <input type="text" className='form_data_basic' placeholder='Doctor MBBS'/>
                        </div>
                        
                        <div className='userprofile_form_input'>
                            <label className='form_label_basic'>Speciality</label>
                            <input type="text" className='form_data_basic' placeholder='Dentist'/>
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
