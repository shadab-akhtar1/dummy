import React from 'react';
import './Adddoctorupload.css';
import {Adddhaupload} from '../Dhamanagement/Adddhaupload';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";

export const Adddoctorupload = () => {
  return (
  
    <div className='hero_doctor'>
        <div className='adddoctor'>
            <div className='adddoctor_header'>
                <div className='adddoctor_header_bar'>
                    <span className='adddoctor_header_bar_1'>1</span>
                    <span className='adddoctor_header_bar_2'>2</span>
                    <span className='adddoctor_header_bar_3'>3</span>
                    <div className='progress_bar_doctor'>
                        <span className='indicator_bar_doctor'></span>
                    </div>
                </div>

            </div>
            <div className='adddoctor_mid'>
                <div> <h2>Upload Documents</h2></div>
            <form action="" className='adddoctor_form'>
                
                <div className='adddoctor_form_fill'>
                    <div className='adddoctor_form_fill_div'><label className='adddoctor_form_fill_labi'>Aadhar Card</label></div><br />
                    <input type="file" id="adddoctor_file"className='adddoctor_form_fill_inp_3' />
                    <label for="adddoctor_file" className='adddoctor_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='adddoctor_form_fill'>
                    <div className='adddoctor_form_fill_div'><label className='adddoctor_form_fill_labi'>Pan Card</label></div><br />
                    <input type="file" id="adddoctor_file"className='adddoctor_form_fill_inp_3' />
                    <label for="adddoctor_file" className='adddoctor_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <div className='adddoctor_form_fill'>
                    <div className='adddoctor_form_fill_div'><label className='adddoctor_form_fill_labi'>Lab RMC Medical Counsel Certificate</label></div><br />
                    <input type="file" id="adddoctor_file"className='adddoctor_form_fill_inp_3' />
                    <label for="adddoctor_file" className='adddoctor_file_up'><i><RiUploadCloudLine/></i>Upload File</label>
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
