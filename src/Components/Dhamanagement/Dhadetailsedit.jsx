import React from 'react';
import './Dhadetailsedit.css';
import {Navbar} from './Navbar';
import userprofile from '../Assets/Avatar.svg';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import {PiArrowLeftFill} from 'react-icons/pi';

export const Dhadetailsedit = () => {
  return (
    <div>
    <div className='management_navbar_edit'><Navbar/></div>
    <div className='middle_edit'>
        
        <div className='middle_edit_heading'><h2><Link to={"/dhadetailsview"} className='link_detailsedit_head'><PiArrowLeftFill className='arrow_edit'/></Link>Edit DHA Details</h2></div>
        
        <div className='middle_edit_heading2'>
            <div className='middle_edit_heading2_basic'>Basic Details</div>
            <Link to={"/dhadocumentedit"} className='detailsedit_document'>
            <div className='middle_edit_heading2_document'>Documents</div>
            </Link>
            <div className='middle_edit_heading2_info'>Bank Info</div>
        </div>

        <div className='middle_userprofile'>
            <div className='middle_userprofile_box'>
                <div className='middle_userprofile_box_2'>
                    <div className='middle_userprofile_box_2_userprofile'>
                        <img src={userprofile} alt="userprofile" />
                        <div className='userprofile_box'>
                            <ul>
                                <li><button className='upload_btn'>Upload New Photo</button></li>
                                <li><button className='reset_btn'>Reset</button></li>
                            </ul>
                            <ul>
                                <li className='listed_line'>Allowed JPG, GIF or PNG. Max size of 800K</li>
                            </ul>
                        </div>
                    </div>
                    <form action="" className='userprofile_form'>
                        <div className='userprofile_form_input'>
                            <label className='form_label'>Full Name</label><br />
                            <input type="text" className='form_data'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label' >Mobile No.</label><br />
                            <input type="text" className='form_data'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label'>Gender</label><br />
                            <input type="text" className='form_data'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label'>Qualification</label><br />
                            <input type="text" className='form_data'/>
                        </div>
                        <div className='userprofile_form_input'>
                            <label className='form_label'>Pharmacy Address</label><br />
                            <input type="text" className='form_data'/>
                            <input type="text" className='form_data'/>
                            <input type="text" className='form_data'/>
                            <input type="text" className='form_data'/>
                        </div>
                    </form>
                    
                </div>
                <Link to={"/dhadocumentedit"}>
                <button className='save_btn'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    </div>
    
  )
}
export default Dhadetailsedit
