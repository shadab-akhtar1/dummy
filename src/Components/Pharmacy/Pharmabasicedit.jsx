import React from 'react';
import './Pharmabasicedit.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {GrAttachment} from 'react-icons/gr';

export const pharmabasicedit = () => {
  return (
    <>
    <div className='pharma_navbar_edit'><Navbar/></div>
    <div className='pharma_edit_basic'>
        <div className='pharma_edit_heading_basic'><h2><Link to={"/pharmadetail"} className='link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='pharma_arrow_edit_basic'/></Link>Edit Profile</h2></div>
        <div className='pharma_edit_heading2_basic_base'>
            <div className='pharma_edit_heading2_basic_2'>Basic Details</div>
            <Link to={"/pharmadocument" } className='pharma_edit_document_basic'>
            <div className='pharma_edit_heading2_document_basic'>Documents</div>
            </Link>
            <div className='pharma_edit_heading2_info_basic'>Bank Info</div>
        </div>

        <div className='pharma_userprofile_basic'>
            <div className='pharma_userprofile_box_basic'>
                <div className='pharma_userprofile_box_2_basic'>
                    
                    <form action="" className='pharma_form_basic'>
                        <div className='pharma_form_input'>
                            <label className='pharma_form_label_basic'>Full Name</label><br />
                            <input type="text" className='pharma_form_data_basic' placeholder='Jaydip Sakhiya'/>
                        </div>
                        <div className='pharma_form_input'>
                            <label className='pharma_form_label_basic' >Mobile No.</label><br />
                            <input type="text" className='pharma_form_data_basic' placeholder='+91 1234567890'/>
                        </div>
                        <div className='pharma_edit_userprofile_form_input'>
                            <label className='pharma_edit_document_form_label'>Pharmacy Photo</label> <br /><br />
                            <input type="file" id='pharma_edit_form' className='pharma_edit_document_form_1'/>
                            <label for="pharma_edit_form" className='pharma_edit_document_form_2'>
                            <i className='pharma_edit_attach_file'><GrAttachment/></i>
                            
                            </label>
                        </div>
                        <div className='pharma_form_input'>
                            <label className='pharma_form_label_basic'>Pharmacy name </label><br />
                            
                            <input type="text"  className='pharma_form_data_basic' placeholder='JJ Labs'/>
                            
                        
                        </div>
                        <div className='pharma_form_input'>
                            <label className='pharma_form_label_basic'>Pharmacy Address</label><br />
                            <input type="text" className='pharma_form_data_basic' placeholder='121'/>
                            <input type="text" className='pharma_form_data_basic' placeholder='Some Society,nr. Some School.'/>
                            <input type="text" className='pharma_form_data_basic' placeholder='Surat'/>
                            <input type="text" className='pharma_form_data_basic' placeholder='Gujarat'/>
                        </div>
                        
                    </form>
                    
                </div>
                <Link to={"/pharmadocument"}>
                <button className='pharma_save_btn_basic'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default pharmabasicedit
