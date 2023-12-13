import React from 'react';
import './Adddha.css';
import Weblogo from "../Assets/Dooper Logo 1500x1500 2.svg";
import Footers from './Footer';
import background from "../Assets/image 219.jpg";
import { Link } from "react-router-dom";

export const Adddha = () => {
  return (
    <div className='hero_adddha_main'>
        <div className='adddha_add'>
                    
            <div className='adddha_header_add'>
                    <div className='progress'>
                        <span className='indicator'></span>
                    </div>
                <div className='adddha_header_bar_add'>
                
                    <span className='adddha_header_bar_1_add'>01</span>
                    <span className='adddha_header_bar_2_add'>02</span>
                    <span className='adddha_header_bar_3_add'>03</span>
                    
                </div>
                

            </div>
            
            <div className='adddha_mid_add'>
                <div> <h2>Basic Details</h2></div>
            <form action="" className='adddha_form_add'>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Name</label>
                    <input  type="text" className='adddha_form_fill_inp_add' placeholder='Enter Full Name'/>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Gender</label>
                    
                    <select name="" id="" className='adddha_form_fill_inp_add' placeholder='Male'>
                        <option value="">Male</option>
                    </select>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Mobile</label>
                    <input type="text" className='adddha_form_fill_inp_add' placeholder='Mobile Number'/>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Address</label>
                    <input type="text" className='adddha_form_fill_inp_add' placeholder='Address Line 1'/><br />
                    <input type="text" className='adddha_form_fill_inp_add'placeholder='Address Line 2'/><br />
                    <input type="text" className='adddha_form_fill_inp_add' placeholder='City'/><br />
                    <input type="text" className='adddha_form_fill_inp_add' placeholder='State'/>
                </div>
                <div className='adddha_form_fill_add'>
                    <label className='adddha_form_fill_labi_add'>Qualification</label>
                    <select name="" id="" className='adddha_form_fill_inp_add' placeholder='Select'>
                        <option value="">Select</option>
                    </select>
                </div>
                <Link to={"/adddhaupload"} className='adddhaupload_link'> 
                <button className='adddha_btn_add'>Next Step</button>
                </Link>
            </form>
            </div>
        </div>
        
    </div>
  )
}
export default Adddha 

