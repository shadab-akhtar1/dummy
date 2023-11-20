import React from 'react';
import './Adddoctor.css';
import {Adddha} from '../Dhamanagement/Adddha';
import { Link } from "react-router-dom";

export const Adddoctor = () => {
  return (
    <div className='hero_adddoctor_main'>
        <div className='adddoctor_add'>
            <div className='adddoctor_header_add'>
                <div className='adddoctor_header_bar_add'>
                
                    <span className='adddoctor_header_bar_1_add'>1</span>
                    <span className='adddoctor_header_bar_2_add'>2</span>
                    <span className='adddoctor_header_bar_3_add'>3</span>
                    <div className='progress_doctor'>
                        <span className='indicator_doctor'></span>
                    </div>
                </div>
                

            </div>
            
            <div className='adddoctor_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='adddoctor_form_add'>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Name</label>
                    <input  type="text" className='adddoctor_form_fill_inp_add'/>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Gender</label>
                    <input type="text" className='adddoctor_form_fill_inp_add'/>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Mobile</label>
                    <input type="text" className='adddoctor_form_fill_inp_add' />
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Address</label>
                    <input type="text" className='adddoctor_form_fill_inp_add'/><br />
                    <input type="text" className='adddoctor_form_fill_inp_add'/><br />
                    <input type="text" className='adddoctor_form_fill_inp_add'/><br />
                    <input type="text" className='adddoctor_form_fill_inp_add'/>
                </div>
                <div className='adddoctor_form_fill_add'>
                    <label className='adddoctor_form_fill_labi_add'>Qualification</label>
                    <input type="text" className='adddoctor_form_fill_inp_add'/>
                </div>
                <Link to={"/adddoctorupload"} className='adddoctorupload_link'> 
                <button className='adddoctor_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Adddoctor
