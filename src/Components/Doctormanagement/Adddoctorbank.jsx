import React from 'react';
import './Adddoctorbank.css';
import {Adddhabank} from '../Dhamanagement/Adddhabank';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";

export const Adddoctorbank = () => {
  return (
    
    <div className='hero_doctorbank'>
        <div className='adddoctorbank_bank'>
            <div className='adddoctorbank_header_bank'>
                    <div className='progress_bar_doctorbank'>
                        <span className='indicator_bar_doctorbank'></span>
                    </div>
                <div className='adddoctorbank_header_bar_bank'>
                    <span className='adddoctorbank_header_bar_1_bank'><IoCheckmark/></span>
                    <span className='adddoctorbank_header_bar_2_bank'><IoCheckmark/></span>
                    <span className='adddoctorbank_header_bar_3_bank'>03</span>
                    
                </div>

            </div>
            <div className='adddoctorbank_mid_bank'>
                <div> <h2>Bank Info</h2></div>
            <form action="" className='adddoctorbank_form'>
                <div className='adddoctorbank_form_fill_bank'>
                    <label className='adddoctorbank_form_fill_labi_bank'>Bank Name</label>
                    <input  type="text" className='adddoctorbank_form_fill_inp_bank'/>
                </div>
                <div className='adddoctorbank_form_fill_bank'>
                    <label className='adddoctorbank_form_fill_labi_bank'>Account Number</label>
                    <input type="text" className='adddoctorbank_form_fill_inp_bank'/>
                </div>
                <div className='adddoctorbank_form_fill_bank'>
                    <label className='adddoctorbank_form_fill_labi_bank'>IFSC Code</label>
                    <input type="text" className='adddoctorbank_form_fill_inp_bank' />
                </div>
                <div className='adddoctorbank_form_fill_bank'>
    
                    <div className='adddoctorbank_form_fill_bank_div'><label className='adddoctorbank_form_fill_labi_bank'>Upload Bank Statement/cancel Cheque</label></div>
                    <input type="file" id="adddoctorbank_file"className='adddoctorbank_form_fill_inp_bank_3' />
                    <label for="adddoctorbank_file" className='adddoctorbank_file_up_bank'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <Link to={"/adddoctorsuccess"} className='adddoctorbank_link'> 
                <button className='adddoctorbank_btn_bank'>Submit</button>
                </Link>
        
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Adddoctorbank
