import React from 'react';
import './Addlab.css';
import { Link } from "react-router-dom";

export const Addlab = () => {
  return (
    <>
    <div className='addlab_hero_addpharma_main'>
        <div className='addlab_addpharma_add'>
            <div className='addlab_addpharma_header_add'>
                <div className='addlab_addpharma_header_bar_add'>
                
                    <span className='addlab_addpharma_header_bar_1_add'>1</span>
                    <span className='addlab_addpharma_header_bar_2_add'>2</span>
                    <span className='addlab_addpharma_header_bar_3_add'>3</span>
                    <div className='addlab_addpharma_progress'>
                        <span className='addlab_addpharma_indicator'></span>
                    </div>
                </div>
                

            </div>
            
            <div className='addlab_addpharma_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='addlab_addpharma_form_add'>
                <div className='addlab_addpharma_form_fill_add'>
                    <label className='addlab_addpharma_form_fill_labi_add'>Name</label>
                    <input  type="text" className='addlab_addpharma_form_fill_inp_add'/>
                </div>
                <div className='addlab_addpharma_form_fill_add'>
                    <label className='addlab_addpharma_form_fill_labi_add'>Gender</label>
                    <input type="text" className='addlab_addpharma_form_fill_inp_add'/>
                </div>
                <div className='addlab_addpharma_form_fill_add'>
                    <label className='addlab_addpharma_form_fill_labi_add'>Mobile</label>
                    <input type="text" className='addlab_addpharma_form_fill_inp_add' />
                </div>
                <div className='addlab_addpharma_form_fill_add'>
                    <label className='addlab_addpharma_form_fill_labi_add'>Address</label>
                    <input type="text" className='addlab_addpharma_form_fill_inp_add'/><br />
                    <input type="text" className='addlab_addpharma_form_fill_inp_add'/><br />
                    <input type="text" className='addlab_addpharma_form_fill_inp_add'/><br />
                    <input type="text" className='addlab_addpharma_form_fill_inp_add'/>
                </div>
                <div className='addlab_addpharma_form_fill_add'>
                    <label className='addlab_addpharma_form_fill_labi_add'>Qualification</label>
                    <input type="text" className='addlab_addpharma_form_fill_inp_add'/>
                </div>
                <Link to={"/addlabupload"} className='addlab_addpharmaupload_link'> 
                <button className='addlab_addpharma_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    
    </>
  )
}
export default Addlab
