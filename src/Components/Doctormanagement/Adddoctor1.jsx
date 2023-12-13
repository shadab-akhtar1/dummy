import React from 'react';
import './Adddoctor1.css';
import { Link } from "react-router-dom";

export const Adddoctor1 = () => {
  return (
    <>
    <div className='hero_adddoctor1_main'>
        <div className='adddoctor1_add'>
            <div className='adddoctor1_header_add'>
                    <div className='progress_doctor1'>
                        <span className='indicator_doctor1'></span>
                    </div>
                <div className='adddoctor1_header_bar_add'>
                
                    <span className='adddoctor1_header_bar_1_add'>01</span>
                    <span className='adddoctor1_header_bar_2_add'>02</span>
                    <span className='adddoctor1_header_bar_3_add'>03</span>
                    
                </div>
                

            </div>
            
            <div className='adddoctor1_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='adddoctor1_form_add'>
                
                <div className='adddoctor1_form_fill_add'>
                    <label className='adddoctor1_form_fill_labi_add'>Speciality</label>
                
                    <select name="" id="" placeholder='Male' className='adddoctor1_form_fill_inp_add'>
                        <option value="">Speciality</option>
                    </select>
                </div>
                
                
                
                <Link to={"/adddoctorupload"} className='adddoctor1upload_link'> 
                <button className='adddoctor1_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
    </>
  )
}
export default Adddoctor1