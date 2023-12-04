import React from 'react';
import './Profilebasic.css';
import {Navbar} from '../Dhamanagement/Navbar';
import {Link} from 'react-router-dom';
import {PiArrowLeftFill} from 'react-icons/pi';
import {GrAttachment} from 'react-icons/gr';

export const Profilebasic = () => {
  return (
    <>
    <div className='profile_documnet_labdetailedit_pharma_navbar_edit'><Navbar/></div>
    <div className='profile_documnet_labdetailedit_pharma_edit_basic'>
        <div className='profile_documnet_labdetailedit_pharma_edit_heading_basic'><h2><Link to={"/profile"} className='profile_documnet_labdetailedit_link_pharma_detailsedit_head_basic'><PiArrowLeftFill className='profile_documnet_labdetailedit_pharma_arrow_edit_basic'/></Link>Edit Lab Details</h2></div>
        <div className='profile_documnet_labdetailedit_pharma_edit_heading2_basic_base'>
            <div className='profile_documnet_labdetailedit_pharma_edit_heading2_basic_2'>Basic Details</div>
            <Link to={"/profiledocument" } className='profile_documnet_labdetailedit_pharma_edit_document_basic'>
            <div className='profile_documnet_labdetailedit_pharma_edit_heading2_document_basic'>Documents</div>
            </Link>
            <div className='profile_documnet_labdetailedit_pharma_edit_heading2_info_basic'>Bank Info</div>
        </div>

        <div className='profile_documnet_labdetailedit_pharma_userprofile_basic'>
            <div className='profile_documnet_labdetailedit_pharma_userprofile_box_basic'>
                <div className='profile_documnet_labdetailedit_pharma_userprofile_box_2_basic'>
                    
                    <form action="" className='profile_documnet_labdetailedit_pharma_form_basic'>
                        <div className='profile_documnet_labdetailedit_pharma_form_input'>
                            <label className='profile_documnet_labdetailedit_pharma_form_label_basic'>Hospital Name</label><br />
                            <input type="text" className='profile_documnet_labdetailedit_pharma_form_data_basic' placeholder='Jaydip Sakhiya'/>
                        </div>
                        <div className='profile_documnet_labdetailedit_pharma_form_input'>
                            <button className='profile_document_btn'>View Photos</button>
                        </div>
                        
                        
                        <div className='profile_documnet_labdetailedit_pharma_form_input'>
                            <label className='profile_documnet_labdetailedit_pharma_form_label_basic'>Hospital Address</label><br />
                            <input type="text" className='profile_documnet_labdetailedit_pharma_form_data_basic' placeholder='121'/>
                            <input type="text" className='profile_documnet_labdetailedit_pharma_form_data_basic' placeholder='Some Society,nr. Some School.'/>
                            <input type="text" className='profile_documnet_labdetailedit_pharma_form_data_basic' placeholder='Surat'/>
                            <input type="text" className='profile_documnet_labdetailedit_pharma_form_data_basic' placeholder='Gujarat'/>
                        </div>
                        <div className='profile_documnet_labdetailedit_pharma_form_input'>
                        <label className='profile_documnet_labdetailedit_pharma_form_label_basic'>Speciality</label><br />
                           <select name="" id="" placeholder='Speciality' className='profile_document_select'>
                            <option value="">Speciality</option>
                           </select>
                        </div>
                        
                    </form>
                    
                </div>
                <Link to={"/prfiledocument"}>
                <button className='profile_documnet_labdetailedit_pharma_save_btn_basic'>Save Details</button>
                </Link>
            </div>
            
        </div>

    </div>
    </>
  )
}
export default Profilebasic
