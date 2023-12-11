import React from 'react';
import './Addpharmaupload.css';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";

export const Addpharmaupload = () => {
  return (
    <>
    <div className='pharmaupload_hero'>
        <div className='pharmaupload_adddha'>
            <div className='pharmaupload_adddha_header'>
                    <div className='pharmaupload_progress_bar'>
                        <span className='pharmaupload_indicator_bar'></span>
                    </div>
                <div className='pharmaupload_adddha_header_bar'>
                    <span className='pharmaupload_adddha_header_bar_1'><IoCheckmark/></span>
                    <span className='pharmaupload_adddha_header_bar_2'>02</span>
                    <span className='pharmaupload_adddha_header_bar_3'>03</span>
                    
                </div>

            </div>
            <div className='pharmaupload_adddha_mid'>
                <div> <h2>Upload Documents</h2></div>
            <form action="" className='pharmaupload_adddha_form'>
                
                <div className='pharmaupload_adddha_form_fill'>
                    <div className='pharmaupload_adddha_form_fill_div'><label className='pharmaupload_adddha_form_fill_labi'>Aadhar Card</label></div>
                    <input type="file" id="pharmaupload_adddha_file"className='pharmaupload_adddha_form_fill_inp_3' />
                    <label for="pharmaupload_adddha_file" className='pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <div className='pharmaupload_adddha_form_fill'>
                    <div className='pharmaupload_adddha_form_fill_div'><label className='pharmaupload_adddha_form_fill_labi'>Pan Card</label></div>
                    <input type="file" id="pharmaupload_adddha_file"className='pharmaupload_adddha_form_fill_inp_3' />
                    <label for="pharmaupload_adddha_file" className='pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <div className='pharmaupload_adddha_form_fill'>
                    <div className='pharmaupload_adddha_form_fill_div'><label className='pharmaupload_adddha_form_fill_labi'>Drug License File</label></div>
                    <input type="file" id="pharmaupload_adddha_file"className='pharmaupload_adddha_form_fill_inp_3' />
                    <label for="pharmaupload_adddha_file" className='pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <div className='pharmaupload_adddha_form_fill'>
                    <div className='pharmaupload_adddha_form_fill_div'><label className='pharmaupload_adddha_form_fill_labi'>GSt</label></div>
                    <input type="file" id="pharmaupload_adddha_file"className='pharmaupload_adddha_form_fill_inp_3' />
                    <label for="pharmaupload_adddha_file" className='pharmaupload_adddha_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
               
                <Link to={"/addpharmabank"} className='pharmaupload_adddhabank_link'>
                <button className='pharmaupload_adddha_btn'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
export default Addpharmaupload