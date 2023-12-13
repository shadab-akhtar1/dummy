import React from 'react';
import './Addlabuploads.css';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";
export const Addlabuploads = () => {
  return (
    <>
    <div className='labuploads_pharmaupload_hero'>
        <div className='labuploads_pharmaupload_adddha'>
            <div className='labuploads_pharmaupload_adddha_header'>
                    <div className='labuploads_pharmaupload_progress_bar'>
                        <span className='labuploads_pharmaupload_indicator_bar'></span>
                    </div>
                <div className='labuploads_pharmaupload_adddha_header_bar'>
                    <span className='labuploads_pharmaupload_adddha_header_bar_1'><IoCheckmark/></span>
                    <span className='labuploads_pharmaupload_adddha_header_bar_2'>02</span>
                    <span className='labuploads_pharmaupload_adddha_header_bar_3'>03</span>
                    
                </div>

            </div>
            <div className='labuploads_pharmaupload_adddha_mid'>
                <div> <h2>Upload Documents</h2></div>
            <form action="" className='labuploads_pharmaupload_adddha_form'>
                
                <div className='labuploads_pharmaupload_adddha_form_fill'>
                    <div className='labuploads_pharmaupload_adddha_form_fill_div'><label className='labuploads_pharmaupload_adddha_form_fill_labi'>Lab Nabal License</label></div>
                    <input type="file" id="labuploads_pharmaupload_adddha_file"className='labuploads_pharmaupload_adddha_form_fill_inp_3' />
                    <label for="labuploads_pharmaupload_adddha_file" className='labuploads_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <div className='labuploads_pharmaupload_adddha_form_fill'>
                    <div className='labuploads_pharmaupload_adddha_form_fill_div'><label className='labuploads_pharmaupload_adddha_form_fill_labi'>GST</label></div>
                    <input type="file" id="labuploads_pharmaupload_adddha_file"className='labuploads_pharmaupload_adddha_form_fill_inp_3' />
                    <label for="labuploads_pharmaupload_adddha_file" className='labuploads_pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                
               
                <Link to={"/addlabbank"} className='labupload_pharmaupload_adddhabank_link'>
                <button className='labupload_pharmaupload_adddha_btn'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
export default Addlabuploads
