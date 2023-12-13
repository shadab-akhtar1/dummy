import React from 'react';
import './Adddoctorupload.css';
import {Adddhaupload} from '../Dhamanagement/Adddhaupload';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";

export const Adddoctorupload = () => {
  return (
  
    <div className='hero_doctor'>
        <div className='adddoctor'>
            <div className='adddoctor_header'>
                    <div className='progress_bar_doctor'>
                        <span className='indicator_bar_doctor'></span>
                    </div>
                <div className='adddoctor_header_bar'>
                    <span className='adddoctor_header_bar_1'><IoCheckmark/></span>
                    <span className='adddoctor_header_bar_2'>02</span>
                    <span className='adddoctor_header_bar_3'>03</span>
                    
                </div>

            </div>
            <div className='adddoctor_mid'>
                <div> <h2>Upload Documents</h2></div>
            <form action="" className='adddoctor_form'>
                
                <div className='adddoctor_form_fill'>
                    <div className='adddoctor_form_fill_div'><label className='adddoctor_form_fill_labi'>Aadhar Card</label></div>
                    <input type="file" id="adddoctor_file"className='adddoctor_form_fill_inp_3' />
                    <label for="adddoctor_file" className='adddoctor_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <div className='adddoctor_form_fill'>
                    <div className='adddoctor_form_fill_div'><label className='adddoctor_form_fill_labi'>Pan Card</label></div>
                    <input type="file" id="adddoctor_file"className='adddoctor_form_fill_inp_3' />
                    <label for="adddoctor_file" className='adddoctor_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <div className='adddoctor_form_fill'>
                    <div className='adddoctor_form_fill_div'><label className='adddoctor_form_fill_labi'>Lab RMC Medical Counsel Certificate</label></div>
                    <input type="file" id="adddoctor_file"className='adddoctor_form_fill_inp_3' />
                    <label for="adddoctor_file" className='adddoctor_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
               
                <Link to={"/adddoctorbank"} className='adddoctorbank_link'>
                <button className='adddoctor_btn'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Adddoctorupload
