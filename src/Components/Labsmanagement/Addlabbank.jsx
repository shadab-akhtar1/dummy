import React from 'react';
import './Addlabbank.css';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";

export const Addlabbank = () => {
  return (
    <>
    <div className='addlabbank_pharmabank_hero'>
        <div className='addlabbank_pharmabank_adddha_bank'>
            <div className='addlabbank_pharmabank_adddha_header_bank'>
                    <div className='addlabbank_pharmabank_progress_bar_bank'>
                        <span className='addlabbank_pharmabank_indicator_bar_bank'></span>
                    </div>
                <div className='addlabbank_pharmabank_adddha_header_bar_bank'>
                    <span className='addlabbank_pharmabank_adddha_header_bar_1_bank'><IoCheckmark/></span>
                    <span className='addlabbank_pharmabank_adddha_header_bar_2_bank'><IoCheckmark/></span>
                    <span className='addlabbank_pharmabank_adddha_header_bar_3_bank'>03</span>
                    
                </div>

            </div>
            <div className='addlabbank_pharmabank_adddha_mid_bank'>
                <div> <h2>Bank Info</h2></div>
            <form action="" className='addlabbank_pharmabank_adddha_form'>
                <div className='addlabbank_pharmabank_adddha_form_fill_bank'>
                    <label className='addlabbank_pharmabank_adddha_form_fill_labi_bank'>Bank Name</label>
                    <input  type="text" className='addlabbank_pharmabank_adddha_form_fill_inp_bank' placeholder='Enter Bank Name'/>
                </div>
                <div className='addlabbank_pharmabank_adddha_form_fill_bank'>
                    <label className='addlabbank_pharmabank_adddha_form_fill_labi_bank'>Account Number</label>
                    <input type="text" className='addlabbank_pharmabank_adddha_form_fill_inp_bank' placeholder='ENter Account Number'/>
                </div>
                <div className='addlabbank_pharmabank_adddha_form_fill_bank'>
                    <label className='addlabbank_pharmabank_adddha_form_fill_labi_bank'>IFSC Code</label>
                    <input type="text" className='addlabbank_pharmabank_adddha_form_fill_inp_bank' placeholder='Enter IFSC'/>
                </div>
                <div className='addlabbank_pharmabank_adddha_form_fill_bank'>
    
                    <div className='addlabbank_pharmabank_adddha_form_fill_bank_div'><label className='addlabbank_pharmabank_adddha_form_fill_labi_bank'>Upload Bank Statement/cancel Cheque</label></div>
                    <input type="file" id="addlabbank_pharmabank_adddha_file"className='addlabbank_pharmabank_adddha_form_fill_inp_bank_3' />
                    <label for="addlabbank_pharmabank_adddha_file" className='addlabbank_pharmabank_adddha_file_up_bank'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <Link to={"/addlabsuccess"} className='addlabbank_pharmabank_adddhabank_link'> 
                <button className='addlabbank_pharmabank_adddha_btn_bank'>Submit</button>
                </Link>
        
            </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
export default Addlabbank
