import React from 'react';
import './Addpharma.css';
import { Link } from "react-router-dom";

export const Addpharma = () => {
  return (
    <>
    <div className='hero_addpharma_main'>
        <div className='addpharma_add'>
            <div className='addpharma_header_add'>
                <div className='addpharma_header_bar_add'>
                
                    <span className='addpharma_header_bar_1_add'>1</span>
                    <span className='addpharma_header_bar_2_add'>2</span>
                    <span className='addpharma_header_bar_3_add'>3</span>
                    <div className='addpharma_progress'>
                        <span className='addpharma_indicator'></span>
                    </div>
                </div>
                

            </div>
            
            <div className='addpharma_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='addpharma_form_add'>
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Name</label>
                    <input  type="text" className='addpharma_form_fill_inp_add'/>
                </div>
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Gender</label>
                    <input type="text" className='addpharma_form_fill_inp_add'/>
                </div>
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Mobile</label>
                    <input type="text" className='addpharma_form_fill_inp_add' />
                </div>
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Address</label>
                    <input type="text" className='addpharma_form_fill_inp_add'/><br />
                    <input type="text" className='addpharma_form_fill_inp_add'/><br />
                    <input type="text" className='addpharma_form_fill_inp_add'/><br />
                    <input type="text" className='addpharma_form_fill_inp_add'/>
                </div>
                <div className='addpharma_form_fill_add'>
                    <label className='addpharma_form_fill_labi_add'>Qualification</label>
                    <input type="text" className='addpharma_form_fill_inp_add'/>
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
