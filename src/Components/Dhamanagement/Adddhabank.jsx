import React from 'react';
import './Adddhabank.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";


export const Adddhabank = () => {
  return (
    <div className='hero'>
        <div className='adddha_bank'>
            <div className='adddha_header_bank'>
                    <div className='progress_bar_bank'>
                        <span className='indicator_bar_bank'></span>
                    </div>
                <div className='adddha_header_bar_bank'>
                    <span className='adddha_header_bar_1_bank'><IoCheckmark/></span>
                    <span className='adddha_header_bar_2_bank'><IoCheckmark/></span>
                    <span className='adddha_header_bar_3_bank'>03</span>
                    
                </div>

            </div>
            <div className='adddha_mid_bank'>
                <div> <h2>Bank Info</h2></div>
            <form action="" className='adddha_form'>
                <div className='adddha_form_fill_bank'>
                    <label className='adddha_form_fill_labi_bank'>Bank Name</label>
                    <input  type="text" className='adddha_form_fill_inp_bank'/>
                </div>
                <div className='adddha_form_fill_bank'>
                    <label className='adddha_form_fill_labi_bank'>Account Number</label>
                    <input type="text" className='adddha_form_fill_inp_bank'/>
                </div>
                <div className='adddha_form_fill_bank'>
                    <label className='adddha_form_fill_labi_bank'>IFSC Code</label>
                    <input type="text" className='adddha_form_fill_inp_bank' />
                </div>
                <div className='adddha_form_fill_bank'>
    
                    <div className='adddha_form_fill_bank_div'><label className='adddha_form_fill_labi'>Upload Bank Statement/cancel Cheque</label></div>
                    <input type="file" id="adddha_file"className='adddha_form_fill_inp_bank_3' />
                    <label for="adddha_file" className='adddha_file_up_bank'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                <Link to={"/adddhasuccess"} className='adddhabank_link'> 
                <button className='adddha_btn_bank'>Submit</button>
                </Link>
        
            </form>
            </div>
        </div>
        
    </div>
  )
}
export default Adddhabank 