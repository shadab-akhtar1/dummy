import React from 'react';
import './Addlabupload.css';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";

export const Addlabupload = () => {
  return (
    <>
    <div className='labupload_pharmaupload_hero'>
        <div className='labupload_pharmaupload_adddha'>
            <div className='labupload_pharmaupload_adddha_header'>
                <div className='labupload_pharmaupload_adddha_header_bar'>
                    <span className='labupload_pharmaupload_adddha_header_bar_1'>1</span>
                    <span className='labupload_pharmaupload_adddha_header_bar_2'>2</span>
                    <span className='labupload_pharmaupload_adddha_header_bar_3'>3</span>
                    <div className='labupload_pharmaupload_progress_bar'>
                        <span className='labupload_pharmaupload_indicator_bar'></span>
                    </div>
                </div>

            </div>
            <div className='labupload_pharmaupload_adddha_mid'>
                <div> <h2>Upload Documents</h2></div>
            <form action="" className='labupload_pharmaupload_adddha_form'>
                
                <div className='labupload_pharmaupload_adddha_form_fill'>
                    <div className='labupload_pharmaupload_adddha_form_fill_div'><label className='labupload_pharmaupload_adddha_form_fill_labi'>Aadhar Card</label></div><br />
                    <input type="file" id="labupload_pharmaupload_adddha_file"className='labupload_pharmaupload_adddha_form_fill_inp_3' />
                    <label for="labupload_pharmaupload_adddha_file" className='labupload_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='labupload_pharmaupload_adddha_form_fill'>
                    <div className='labupload_pharmaupload_adddha_form_fill_div'><label className='labupload_pharmaupload_adddha_form_fill_labi'>Pan Card</label></div><br />
                    <input type="file" id="labupload_pharmaupload_adddha_file"className='labupload_pharmaupload_adddha_form_fill_inp_3' />
                    <label for="labupload_pharmaupload_adddha_file" className='labupload_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='labupload_pharmaupload_adddha_form_fill'>
                    <div className='labupload_pharmaupload_adddha_form_fill_div'><label className='labupload_pharmaupload_adddha_form_fill_labi'>Lab License File</label></div><br />
                    <input type="file" id="labupload_pharmaupload_adddha_file"className='labupload_pharmaupload_adddha_form_fill_inp_3' />
                    <label for="labupload_pharmaupload_adddha_file" className='labupload_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='labupload_pharmaupload_adddha_form_fill'>
                    <div className='labupload_pharmaupload_adddha_form_fill_div'><label className='labupload_pharmaupload_adddha_form_fill_labi'>Lab Established License</label></div><br />
                    <input type="file" id="labupload_pharmaupload_adddha_file"className='labupload_pharmaupload_adddha_form_fill_inp_3' />
                    <label for="labupload_pharmaupload_adddha_file" className='labupload_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
               
                <Link to={"/addlabuploads"} className='labupload_pharmaupload_adddhabank_link'>
                <button className='labupload_pharmaupload_adddha_btn'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    
    </>
  )
}
export default Addlabupload
