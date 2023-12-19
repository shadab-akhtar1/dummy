import React from 'react';
import './Adddoctor.css';
import {Adddha} from '../Dhamanagement/Adddha';
import { Link } from "react-router-dom";

export const Adddoctor = () => {
  return (
    <div className='hero_adddoctor_main'>
        <div className='adddoctor_add'>
            <div className='adddoctor_header_add'>
                    <div className='progress_doctor'>
                        <span className='indicator_doctor'></span>
                    </div>
                <div className='adddoctor_header_bar_add'>
                
                    <span className='adddoctor_header_bar_1_add'>01</span>
                    <span className='adddoctor_header_bar_2_add'>02</span>
                    <span className='adddoctor_header_bar_3_add'>03</span>
                    
                </div>
                

            </div>
            
            <div className='adddoctor_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='adddoctor_form_add'>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Name</label>
                    <input  type="text" className='adddoctor_form_fill_inp_add' placeholder='Enter Full Name'/>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Gender</label>
                    
                    <select name="" id="" className='adddoctor_form_fill_inp_add' placeholder='select'>
                        <option value="">Male</option>
                    </select>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Mobile</label>
                    <input type="text" className='adddoctor_form_fill_inp_add' placeholder='Enter Mobile Number'/>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Address</label>
                    <input type="text" className='adddoctor_form_fill_inp_add'placeholder='Address Line 1'/><br />
                    <input type="text" className='adddoctor_form_fill_inp_add'placeholder='Address Line 2'/><br />
                    <input type="text" className='adddoctor_form_fill_inp_add'placeholder='City'/><br />
                    <input type="text" className='adddoctor_form_fill_inp_add'placeholder='State'/>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Qualification</label>
                
                    <select name="" id="" placeholder='Select' className='adddoctor_form_fill_inp_add'>
                        <option value="">Select</option>
                    </select>
                </div>
                <Link to={"/adddoctor1"} className='adddoctorupload_link'> 
                <button className='adddoctor_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Adddoctor
