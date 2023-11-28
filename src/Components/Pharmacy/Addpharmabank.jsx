import React from 'react';
import './Addpharmabank.css';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";

export const Addpharmabank = () => {
  return (
    <>
    <div className='pharmabank_hero'>
        <div className='pharmabank_adddha_bank'>
            <div className='pharmabank_adddha_header_bank'>
                <div className='pharmabank_adddha_header_bar_bank'>
                    <span className='pharmabank_adddha_header_bar_1_bank'>1</span>
                    <span className='pharmabank_adddha_header_bar_2_bank'>2</span>
                    <span className='pharmabank_adddha_header_bar_3_bank'>3</span>
                    <div className='pharmabank_progress_bar_bank'>
                        <span className='pharmabank_indicator_bar_bank'></span>
                    </div>
                </div>

            </div>
            <div className='pharmabank_adddha_mid_bank'>
                <div> <h2>Bank Info</h2></div>
            <form action="" className='pharmabank_adddha_form'>
                <div className='pharmabank_adddha_form_fill_bank'>
                    <label className='pharmabank_adddha_form_fill_labi_bank'>Bank Name</label>
                    <input  type="text" className='pharmabank_adddha_form_fill_inp_bank'/>
                </div>
                <div className='pharmabank_adddha_form_fill_bank'>
                    <label className='pharmabank_adddha_form_fill_labi_bank'>Account Number</label>
                    <input type="text" className='pharmabank_adddha_form_fill_inp_bank'/>
                </div>
                <div className='pharmabank_adddha_form_fill_bank'>
                    <label className='pharmabank_adddha_form_fill_labi_bank'>IFSC Code</label>
                    <input type="text" className='pharmabank_adddha_form_fill_inp_bank' />
                </div>
                <div className='pharmabank_adddha_form_fill_bank'>
    
                    <div className='pharmabank_adddha_form_fill_bank_div'><label className='pharmabank_adddha_form_fill_labi'>Upload Bank Statement/cancel Cheque</label></div><br />
                    <input type="file" id="pharmabank_adddha_file"className='pharmabank_adddha_form_fill_inp_bank_3' />
                    <label for="pharmabank_adddha_file" className='pharmabank_adddha_file_up_bank'><i><RiUploadCloudLine/></i>Upload File</label>
                </div>
                <Link to={"/addpharmasuccess"} className='pharmabank_adddhabank_link'> 
                <button className='pharmabank_adddha_btn_bank'>Upload</button>
                </Link>
        
            </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
export default Addpharmabank
