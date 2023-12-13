import React from 'react';
import './Addpharma.css';
import { Link } from "react-router-dom";
import {RiUploadCloudLine} from "react-icons/ri";

export const Addpharma = () => {
  return (
    <>
    <div className='hero_addpharma_main'>
        <div className='addpharma_add'>
            <div className='addpharma_header_add'>
                    <div className='addpharma_progress'>
                        <span className='addpharma_indicator'></span>
                    </div>
                <div className='addpharma_header_bar_add'>
                
                    <span className='addpharma_header_bar_1_add'>01</span>
                    <span className='addpharma_header_bar_2_add'>02</span>
                    <span className='addpharma_header_bar_3_add'>03</span>
                    
                </div>
                

            </div>
            
            <div className='addpharma_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='addpharma_form_add'>
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Name</label>
                    <input  type="text" className='addpharma_form_fill_inp_add' placeholder='Enter Full Name'/>
                </div>
                <div className='adddhapharmacy_form_fill'>
                    <div className='adddhapharmacy_form_fill_div'><label className='adddhapharmacy_form_fill_labi'>Aadhar Card</label></div>
                    <input type="file" id="adddhapharmacy_file"className='adddhapharmacy_form_fill_inp_3' />
                    <label for="adddhapharmacy_file" className='adddhapharmacy_file_up'><i><RiUploadCloudLine/></i><p>Upload</p></label>
                </div>
                
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Pharmacy Name</label>
                    <input type="text" className='addpharma_form_fill_inp_add'placeholder='Pharmacy Name' />
                </div>
                
                
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Address</label>
                    <input type="text" className='addpharma_form_fill_inp_add' placeholder='Address Line 1'/><br />
                    <input type="text" className='addpharma_form_fill_inp_add' placeholder='Address Line 2'/><br />
                    <input type="text" className='addpharma_form_fill_inp_add' placeholder='City'/><br />
                    <input type="text" className='addpharma_form_fill_inp_add' placeholder='State'/>
                </div>
                
                <Link to={"/addpharmaupload"} className='addpharmaupload_link'> 
                <button className='addpharma_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Addpharma
